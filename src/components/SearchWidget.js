import React from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
const SearchWidget = () => {
  return (
    <Form style={{ position: 'relative' }} className="d-flex ms-auto" >
    <InputGroup>
        <InputGroup.Text><Search /></InputGroup.Text>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" />
    </InputGroup>
</Form>
  )
}

export default SearchWidget
