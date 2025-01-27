import 'tailwindcss/tailwind.css'
import { CloseOutlined, DoneOutlined, CachedOutlined } from '@mui/icons-material';
import { JSX, useState } from 'react';

type claimPropsType = {
    claimId?: number,
    date?: string,
    patientFirstname?: string,
    patientLastname?: string,
    status?: string,
    amount?: number,
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
  };

  type ClaimTableProps = {
    claims: claimPropsType[];
  };

  type statusType = {
    status: string,
    backgroundColour: string,
    textColour: string,
    icon: JSX.Element
  };

  const statusList: statusType[] = [
    {
        status: 'Paid',
        backgroundColour: '#dbeed7',
        textColour: '#4da935',
        icon: <DoneOutlined/>
    }, 
    {
        status: 'Declined',
        backgroundColour: '#ff6969',
        textColour: '#850505',
        icon: <CloseOutlined/>
    },
    {
        status: 'Pending',
        backgroundColour: '#fcf7c2',
        textColour: '#D6CC5A',
        icon: <CachedOutlined/>
    },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusObj = statusList.find((s) => s.status === status);

  if (!statusObj) {
      return null;
  }

  const bgColor = statusObj.backgroundColour;
  const textColor = statusObj.textColour;

  return ( 
    <div
        className="flex items-center justify-center px-2 py-1 rounded-full"
        style={{ backgroundColor: bgColor }}
    >
        <span
            className="items-center justify-center text-xs font-semibold leading-5"
            style={{ color: textColor }}
        >
            <span className="text-xs">{statusObj.icon}</span>
            <span className="ml-1 text-base">{statusObj.status}</span>
        </span>
    </div>
  );
};
  
  const ClaimTable: React.FC<ClaimTableProps> = (props) => {
    const { claims } = props;

    const [checkedClaims, setCheckedClaims] = useState<{ [key: number]: boolean }>({});
  
    const handleCheckboxChange = (claimId: number | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (claimId !== undefined) {
        setCheckedClaims({
          ...checkedClaims,
          [claimId]: event.target.checked,
        });
  
        claims.find(claim => claim.claimId === claimId)?.onClick?.(event);
      }
    };
  
    return (
      <div className="relative bg-transparent">
        <table className="min-w-full table-fixed divide-y divide-gray-3 w-full">
          <thead className="bg-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold border-b border-gray-3 tracking-wider w-1/5"
              >
                Claim Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold border-b border-gray-3 tracking-wider w-1/5"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold border-b border-gray-3 tracking-wider w-1/5"
              >
                Patient Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold border-b border-gray-3 tracking-wider w-1/5"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold border-b border-gray-3 tracking-wider w-1/5"
              >
                Amount
              </th>
            </tr>
            </thead>
        <tbody className="bg-white divide-y divide-gray-3">
          {claims.map((claim, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-base text-black border-b border-gray-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={checkedClaims[claim.claimId || 0] || false}
                    onChange={handleCheckboxChange(claim.claimId)}
                  />
                  <span className="ml-2">{claim.claimId}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-black border-b border-gray-3">
                {claim.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-black border-b border-gray-3">
                {`${claim.patientFirstname} ${claim.patientLastname}`}
              </td>
              <td className="px-6 py-4 bg-transparent whitespace-nowrap text-base text-black border-b border-gray-3">
                <StatusBadge status={claim.status || ""} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-black border-b border-gray-3">
                {claim.amount ? `£${claim.amount.toFixed(2)}` : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimTable;