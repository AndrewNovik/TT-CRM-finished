import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BehaviorSubject, debounceTime, Observable, of, take } from 'rxjs';
import { ApiDataService } from '../../services/api-data.service';
import { BaseList } from '../../interfaces/main-interfaces-list';
import {
  AddAgentForm,
  DataItem,
  filtersInitialState,
  ManagementFormKey,
  Roles,
  Statuses,
} from './management';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { skipEmptyFilters } from '../../utils/functions';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Router } from '@angular/router';
import {
  NgbAccordionModule,
  NgbDatepickerModule,
  NgbModal,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AddAgentModalComponent } from './add-agent-modal/add-agent-modal.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const apiRoute = 'http://cars.cprogroup.ru/api/rubetek/angular-testcase-list/';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    NgbPaginationModule,
  ],
  providers: [ApiDataService],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
})
export class ManagementComponent implements OnInit {
  @ViewChildren('chechbox')
  readonly chechboxlements: QueryList<ElementRef<HTMLInputElement>> =
    new QueryList();

  @ViewChild('chechboxAll')
  readonly chechboxAll?: ElementRef<HTMLInputElement>;

  page = 1;
  pageSize = 5;
  collectionSize = 0;
  sizes = [5, 10, 15];
  form!: UntypedFormGroup;
  originalAgentsList: BaseList<DataItem> = { list: [], total: 0 };
  sortedAgentsList: BaseList<DataItem> = { list: [], total: 0 };
  sortedListToShow: DataItem[] = [];
  checkedAgentsList: number[] = [];
  isCheckedAllAgents: boolean = false;
  statuses = Object.values(Statuses);
  roles = Object.values(Roles);

  Statuses = Statuses;
  ManagementFormKey = ManagementFormKey;

  private apiDataSubject = new BehaviorSubject<BaseList<DataItem>>({
    list: [],
    total: 0,
  });

  apiData$ = this.apiDataSubject.asObservable();

  showLoader$: Observable<boolean> = this.apiDataService.showLoader$;
  destroyRef = inject(DestroyRef);

  constructor(
    private apiDataService: ApiDataService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(filtersInitialState);
    this.form
      .get([ManagementFormKey.login])
      ?.setValidators(Validators.pattern(/^[a-zA-Z0-9_-]{2,16}$/));
    this.form
      .get([ManagementFormKey.phoneNumber])
      ?.setValidators(Validators.pattern(/^[0-9_-]{2,16}$/));
    this.form
      .get([ManagementFormKey.eMail])
      ?.setValidators(
        Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
      );
    this.getApiDataSubs();
    this.subscribeOnFiltersChange();
  }

  back() {
    this.router.navigate(['/main-page']);
  }

  getApiData(): Observable<BaseList<DataItem>> {
    return this.apiDataService
      .requestGet<BaseList<DataItem>>(apiRoute)
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  getApiDataSubs(): void {
    this.getApiData().subscribe((res) => {
      this.originalAgentsList = res;

      this.collectionSize = res.total;

      this.sortedListToShow = [
        ...this.originalAgentsList.list.slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize
        ),
      ];
      this.showLoader$ = of(false);
    });
  }

  subscribeOnFiltersChange() {
    this.form
      .get([ManagementFormKey.login])
      ?.valueChanges.pipe(
        takeUntilDestroyed(this.destroyRef),
        debounceTime(900)
      )
      .subscribe(() => this.onFilter());
  }

  addAgent() {
    const modalRef = this.modal.open(AddAgentModalComponent, {
      size: 'lg',
      keyboard: false,
    });
    modalRef.componentInstance.login;
    modalRef.componentInstance.role;
    modalRef.componentInstance.phone;
    modalRef.componentInstance.eMail;
    modalRef.componentInstance.status;
    modalRef.componentInstance.isHaveEP;
    modalRef.result
      .then((result) => {
        if (result) {
          this.apiDataService
            .requestPost<AddAgentForm>(apiRoute, result)
            .pipe(take(1))
            .subscribe((res) => {
              if (res === true) {
                this.getApiDataSubs();
              }
            });
        }
      })
      .catch(() => {});
  }

  loadPage(page: number) {
    this.checkedAgentsList = [];
    this.isCheckedAllAgents = false;
    this.onFilter(page);
  }

  onFilter(page: number = 1) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let newFilters = skipEmptyFilters(this.form.value);

    this.sortedAgentsList.list = [...this.originalAgentsList.list].filter(
      (agent) =>
        (!newFilters[ManagementFormKey.login] ||
          agent.login
            .toLowerCase()
            .includes(
              String(newFilters[ManagementFormKey.login]).toLowerCase()
            )) &&
        (!newFilters[ManagementFormKey.eMail] ||
          agent.email
            .toLocaleLowerCase()
            .includes(
              String(newFilters[ManagementFormKey.eMail]).toLowerCase()
            )) &&
        (!newFilters[ManagementFormKey.phoneNumber] ||
          agent.phoneNumber.includes(
            newFilters[ManagementFormKey.phoneNumber]
          )) &&
        (!newFilters[ManagementFormKey.role] ||
          agent.role === newFilters[ManagementFormKey.role]) &&
        (!newFilters[ManagementFormKey.status] ||
          agent.status === newFilters[ManagementFormKey.status]) &&
        (!newFilters[ManagementFormKey.creationDate] ||
          agent.creationDate >= +newFilters[ManagementFormKey.creationDate]) &&
        (!newFilters[ManagementFormKey.editionDate] ||
          agent.editDate >= +newFilters[ManagementFormKey.editionDate])
    );

    this.collectionSize = this.sortedAgentsList.list.length;
    this.sortedListToShow = [
      ...this.sortedAgentsList.list.slice(
        (page - 1) * this.pageSize,
        (page - 1) * this.pageSize + this.pageSize
      ),
    ];
  }

  onCancel() {
    this.form.reset(filtersInitialState, { emitEvent: false });
  }

  onReset() {
    this.form.reset(filtersInitialState, { emitEvent: false });
    this.onFilter();
  }

  enableAgents() {
    this.isCheckedAllAgents
      ? this.sortedAgentsList.list.map((agent) => {
          agent.status = 'Активен';
        })
      : this.checkedAgentsList.forEach((id) => {
          this.sortedAgentsList.list.map((agent) => {
            if (agent.id === id) {
              agent.status = 'Активен';
            }
          });
        });
  }

  disableAgents() {
    this.isCheckedAllAgents
      ? this.sortedAgentsList.list.map((agent) => {
          agent.status = 'Заблокирован';
        })
      : this.checkedAgentsList.forEach((id) => {
          this.sortedAgentsList.list.map((agent) => {
            if (agent.id === id) {
              agent.status = 'Заблокирован';
            }
          });
        });
  }

  changeCheckBoxTableItem(event: Event, id: number) {
    const target: HTMLInputElement = event.target as HTMLInputElement;

    if (target.checked && !this.checkedAgentsList.find((elem) => elem === id)) {
      this.checkedAgentsList.push(id);
    } else {
      this.checkedAgentsList = this.checkedAgentsList.filter(
        (elem) => elem !== id
      );
    }

    this.isCheckedAllAgents =
      this.chechboxlements.length <= this.checkedAgentsList.length;
  }

  changeCheckBoxAllItems() {
    this.checkedAgentsList = this.isCheckedAllAgents
      ? [...this.sortedListToShow.map((agent) => agent.id)]
      : [];

    this.chechboxlements.forEach((elem) => {
      elem.nativeElement.checked = this.isCheckedAllAgents;
    });
  }

  onChangePageSizing(pageSize: number) {
    this.page = 1;
    this.pageSize = pageSize;
    this.onFilter();
  }
}
