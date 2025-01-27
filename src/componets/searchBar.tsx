import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="bg-white rounded-full flex justify-center items-center w-full border border-grey shadow-lg">
      <div className="bg-transparent relative flex rounded-full w-full">
        <select className="text-m font-bold text-black rounded-full bg-transparent ml-2 mr-2">
          <option className="text-base text-black cursor-pointer" value="All">
            All
          </option>
          <option className="text-base text-black cursor-pointer" value="Patients">
            Patients
          </option>
          <option className="text-base text-black cursor-pointer" value="Reports">
            Reports
          </option>
          <option className="text-base text-black cursor-pointer" value="Settings">
            Settings
          </option>
        </select>

        <TextField
          className="flex w-full bg-transparent text-gray-2"
          placeholder={props.placeholder}
          onChange={props.onChange}
          variant="standard"
          slotProps={{
            input: {
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
