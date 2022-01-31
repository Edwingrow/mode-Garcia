import React from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
const Search = () => {
  return (
    <Form style={{ position: 'relative' }} className="d-flex ms-auto" >
    <InputGroup>
        <InputGroup.Text><Search /></InputGroup.Text>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" />
    </InputGroup>
</Form>
  )
}

export default Search
