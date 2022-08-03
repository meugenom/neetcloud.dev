import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
	selector: 'app-draw',
	templateUrl: './draw.component.html',
	styleUrls: ['./draw.component.sass']
})
export class DrawComponent implements OnInit {

	constructor(private modalService: ModalService) { }

	ngOnInit(): void {
		
	}


	//modals
	openModal(id: string) {
		this.modalService.open(id);
	}

	closeModal(id: string) {
		this.modalService.close(id);
	}


}
