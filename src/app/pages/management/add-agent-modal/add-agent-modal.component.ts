import { Component, Input, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { initialAddAgentValue } from './add-agent';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { skipEmptyFilters } from '../../../utils/functions';

@Component({
  selector: 'app-add-agent-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-agent-modal.component.html',
  styleUrl: './add-agent-modal.component.scss',
})
export class AddAgentModalComponent implements OnInit {
  @Input() login?: string;
  @Input() phone?: string;
  @Input() eMail?: string;
  @Input() role?: string;
  @Input() status?: string;
  @Input() isHaveEP?: string;

  form!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(initialAddAgentValue);
  }

  createAgent() {
    const newFilters = skipEmptyFilters(this.form.value);
    const requestPayload = { ...newFilters };
    this.activeModal.close(requestPayload);
  }
}
