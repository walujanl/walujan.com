import { useState } from "react";
import { OfficialAccounts } from "@/data/OfficialAccountLists";

export const OfficialAccountsList = () => {
  const [dropdownStates, setDropdownStates] = useState(
    new Array(OfficialAccounts.length).fill(false)
  );

  const toggleDropdown = (index: number) => {
    setDropdownStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <>
      {OfficialAccounts.map((section, sectionIndex) => (
        <div key={sectionIndex} className="my-8">
          <div
            onClick={() => toggleDropdown(sectionIndex)}
            className="flex justify-between items-center mb-4 cursor-pointer"
          >
            <h2 className="text-lg font-bold">{section.title}</h2>
            <span className="text-black dark:text-white px-4 py-2">
              {dropdownStates[sectionIndex] ? "▲" : "▼"}
            </span>
          </div>
          {dropdownStates[sectionIndex] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.accounts.map((account, accountIndex) => (
                <div
                  key={accountIndex}
                  className="mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:border-zinc-700 dark:bg-darkSecondary flex flex-col flex-grow"
                >
                  <div className="p-5 flex-grow">
                    <h3 className="text-md font-semibold">
                      {account.platform}
                    </h3>
                    <p>{account.name}</p>
                    <p>
                      <a
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:underline"
                      >
                        @{account.username}
                      </a>
                    </p>
                    <p>{account.type}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <p className="mt-8">
        <b>Note: </b>
        Not all personal accounts are listed on this list, such as development
        accounts, productivity, social media, and course due of privacy or not
        yet required.
      </p>
    </>
  );
};
