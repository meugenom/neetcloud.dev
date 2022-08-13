import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { FileListComponent } from "./file-list.component";
import { OrderByPosition } from "./OrderByPosition.pipe";

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        DragulaModule.forRoot(),
    ],
    declarations: [
        FileListComponent,
        OrderByPosition
    ],
    exports: [
        FileListComponent
    ]

})
export class FileListModule {}
