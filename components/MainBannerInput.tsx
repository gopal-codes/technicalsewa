import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { setMainBanner, setMainBannerId } from "../redux/inputs";
import { setActiveCategory, setServiceUrl } from "../redux/productDetails";
import { setProductIdSlug } from "../redux/slugSlice";

export default function MainBannerInput(props: any) {
  const [showSuggestions, setShowSuggestion] = React.useState([]);
  const [searchedQuery, setSearchedQuery] = React.useState("");
  const { suggestions } = props;

  React.useEffect(() => {
    const temp = suggestions?.map(
      (items: any, index: any) => items?.product_name
    );
    setShowSuggestion(temp);
  }, []);

  const dispatch = useDispatch();
  const handleChange = async (e: any, value: any) => {
    // console.log(value);
    await suggestions?.map((items: any, index: any) => {
      if (items?.product_name === value) {
        // return items?.product_id;
        // console.log(items?.product_id);

        dispatch(setMainBanner(items?.product_name));
        dispatch(setMainBannerId(items?.product_id));
        dispatch(setActiveCategory(items?.brand_name));
        dispatch(setServiceUrl(items?.url_product_name));
        dispatch(setProductIdSlug(items?.product_id));
      }
    });
    // dispatch(setMainBannerId(showSuggestionsId));
  };

  const handleSearchedQuery = (e: any) => {
    // console.log(e?.target?.value);
    setSearchedQuery(e?.target?.value);
  };

  return (
    <Autocomplete
      disablePortal
      onChange={handleChange}
      options={searchedQuery?.length !== 0 ? showSuggestions : []}
      sx={{ width: "100%", bgcolor: "white" }}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={handleSearchedQuery}
          label="Search service here..."
        />
      )}
    />
  );
}
