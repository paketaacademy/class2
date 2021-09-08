import React from "react"
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import { SearchUser, SearchBox, IconBox } from "./style"

const Input = () => {

  return (
    <SearchBox component="form">
      <IconBox aria-label="search">
        <SearchIcon />
      </IconBox>
      <SearchUser      
        placeholder="Search GitHub username..."
        inputProps={{ 'aria-label': 'Search GitHub username...' }}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </SearchBox>
  )
}

export default Input