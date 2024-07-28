import { WebsiteStorage } from "@/lib/MainConstants";

const certificateStorage = WebsiteStorage.certificates;

export const CertificateCompletionLists = [
  {
    year: 2024,
    certificates: [
      {
        certificate_name: "DTS VSGA - Junior Network Administrator (2024)",
        issued_by: "Digital Talent Scholarship Kominfo (ID) - BPSDMP Manado",
        date_issued: "2024-05-03",
        credential_id: "19375751130-35/VSGA/BLSDM.Kominfo/2024",
        credential_url:
          "https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=19375751130-35",
        certificate_file: `${certificateStorage}/certificate-of-completion/dts-kominfo/dts-kominfo-vsga-junior-network-administrator-may-2024.pdf`,
      },
      {
        certificate_name: "DTS DEA - Pemasaran Digital Dasar (2024)",
        issued_by: "Digital Talent Scholarship Kominfo (ID) - BPSDMP Manado",
        date_issued: "2024-02-27",
        credential_id: "19673171130-187/DEA/BLSDM.Kominfo/2024",
        credential_url:
          "https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=19673171130-187",
        certificate_file: `${certificateStorage}/certificate-of-completion/dts-kominfo/dts-kominfo-dea-pemasaran-digital-dasar-february-2024.pdf`,
      },
    ],
  },
  {
    year: 2023,
    certificates: [
      {
        certificate_name: "DTS VSGA - Junior Graphic Designer (2023)",
        issued_by:
          "Digital Talent Scholarship Kominfo (ID) - Politeknik Negeri Manado",
        date_issued: "2023-08-31",
        credential_id: "19362001130-60/VSGA/BLSDM.Kominfo/2023",
        credential_url:
          "https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=19362001130-60",
        certificate_file: `${certificateStorage}/certificate-of-completion/dts-kominfo/dts-kominfo-vsga-junior-graphic-designer-august-2023.pdf`,
      },
    ],
  },
];
