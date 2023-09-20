import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificates: any[] = [];

  constructor(private certificatesService: CertificatesService) { }

  ngOnInit(): void {
    this.certificatesService.getCertificates().subscribe(data => {
      this.certificates = data;
    });
  }
}

