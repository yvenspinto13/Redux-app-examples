import {
  Component,
  ChangeDetectionStrategy,
  Output, ViewChild,
  EventEmitter,
  Input,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateModalComponent implements AfterViewInit {

  private modalName: string = 'templateFormModal';
  private modalRef: NgbModalRef;

  @ViewChild('content') _templateModal: ElementRef;

  @Input() set modalState(_modalState: any) {
    if (_modalState === this.modalName) {
      this.openModal();
    } else if (this.modalRef) {
      this.closeModal();
    }
  }

  @Output() oncloseModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  openModal() {
    this.modalRef = this.modalService.open(this._templateModal, { backdrop: 'static', keyboard: false, size: 'sm' });
  }

  closeModal() {
    this.modalRef.close();
  }
}
