import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { InfoService } from '../../services/info.service';
import { Info } from '../../shared/info.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource;
  displayedColumns = ['id', 'title', 'image'];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getInfo().subscribe(dataResults => {
      if (!dataResults) {
        return;
      } 
      this.dataSource = new MatTableDataSource(dataResults);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
