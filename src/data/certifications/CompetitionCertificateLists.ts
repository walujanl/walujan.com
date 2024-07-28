import { WebsiteStorage } from "@/lib/MainConstants";

const certificateStorage = WebsiteStorage.certificates;

export const CompetitionCertificateLists = [
  {
    year: 2024,
    certificates: [
      {
        certificate_name:
          "The Regional Outstanding Student 2024 Final Participant",
        issued_by: "LLDIKTI XVI",
        date_issued: "2024-05-08",
        credential_id: null,
        credential_url: null,
        certificate_file: `${certificateStorage}/competition-certificates/pilmapres-2024/lldikti-xvi-peserta-pilmapres-wilayah-final-2024.pdf`,
      },
      {
        certificate_name: "The 1st Rank Outstanding Student 2024",
        issued_by: "Politeknik Negeri Manado",
        date_issued: "2024-05-02",
        credential_id: null,
        credential_url: null,
        certificate_file: `${certificateStorage}/competition-certificates/pilmapres-2024/polimdo-pilmapres-2024.pdf`,
      },
    ],
  },
];
