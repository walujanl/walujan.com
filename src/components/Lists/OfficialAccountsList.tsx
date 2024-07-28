import { OfficialAccountLists } from "@/data/OfficialAccountLists";

export const OfficialAccountsList = () => {
  return (
    <>
      <div className="relative overflow-x-auto my-10">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-favouriteColor dark:bg-darkSecondary text-favouriteTextColor dark:text-LightContent">
            <tr>
              <th>Platform</th>
              <th>Name / Username</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {OfficialAccountLists.map((account, index) => (
              <tr key={index}>
                <th>{account.platform}</th>
                <td>
                  <a
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {account.username}
                  </a>
                </td>
                <td>{account.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <b>Note: </b>
        Not all personal accounts are listed on this list, such as development
        accounts, productivity, social media, and course due of privacy or not
        yet required.
      </p>
    </>
  );
};
