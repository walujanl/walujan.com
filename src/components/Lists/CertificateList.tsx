import { ExternalLinkIcon } from "@/components/Misc/Icons";

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const Certificate: React.FC<{ certificate: any }> = ({
  certificate,
}) => {
  return (
    <li>
      <h3>{certificate.certificate_name}</h3>
      <p>{`Issued by: ${certificate.issued_by}`}</p>
      <p>{`Date issued: ${formatDate(certificate.date_issued)}`}</p>
      {certificate.date_updated && (
        <p>{`Date updated: ${formatDate(certificate.date_updated)}`}</p>
      )}
      {certificate.date_expired && (
        <p>{`Date expired: ${formatDate(certificate.date_expired)}`}</p>
      )}
      {certificate.credential_id && (
        <p>{`Credential ID: ${certificate.credential_id}`}</p>
      )}
      {certificate.credential_url && (
        <a
          href={certificate.credential_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hover:underline font-semibold">
            Show credential
            <ExternalLinkIcon />
          </p>
        </a>
      )}
      <a
        href={certificate.certificate_file}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="hover:underline font-semibold">
          View certificate file
          <ExternalLinkIcon />
        </p>
      </a>
    </li>
  );
};

const YearCertificates: React.FC<{ yearData: any }> = ({ yearData }) => (
  <div>
    <h2>{yearData.year}</h2>
    <ul>
      {yearData.certificates
        .sort(
          (a: any, b: any) =>
            new Date(b.date_issued).getTime() -
            new Date(a.date_issued).getTime()
        )
        .map((certificate: any, certIndex: number) => (
          <Certificate key={certIndex} certificate={certificate} />
        ))}
    </ul>
    <hr className="mt-10" />
  </div>
);

const CertificateList: React.FC<{ CertificateLists: any[] }> = ({
  CertificateLists,
}) => {
  const sortedCertificateLists = CertificateLists.sort(
    (a, b) => b.year - a.year
  );

  return (
    <div>
      {sortedCertificateLists.map((yearData, index) => (
        <YearCertificates key={index} yearData={yearData} />
      ))}
    </div>
  );
};

export default CertificateList;
