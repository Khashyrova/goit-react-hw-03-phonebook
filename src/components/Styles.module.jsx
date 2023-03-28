import styled from 'styled-components';

export const Phonebook = styled.div`
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid grey;
  border-radius: 5px;
  margin: 20px;
  max-width: 350px;
  padding: 10px;
  background-color: whitesmoke;
`;
export const PhonebookTitle = styled.h2`
  margin: 10px 0;
  text-align: center;
`;
export const PhonebookForm = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
export const PhonebookFormLabel = styled.label`
  font-weight: 700;
`;
export const PhonebookFormInput = styled.input`
  margin: 5px 0;
  border: 1px solid grey;
  border-radius: 4px;
  height: 30px;
  padding-left: 10px;
  &:hover {
    -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  }
`;
export const PhonebookFormButton = styled.button`
  width: 200px;
  margin: 0 auto;
  margin-top: 20px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: whitesmoke;
  }
`;
export const Contacts = styled.div`
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid grey;
  border-radius: 5px;
  margin: 20px;
  max-width: 350px;
  padding: 10px;
  background-color: whitesmoke;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
export const ContactsTittle = styled.h2`
  margin: 10px 0;
  text-align: center;
`;
export const ContactsList = styled.ul`
  list-style: none;
  margin: 5px auto;
  padding: 0;
`;
export const ContactsItem = styled.li`
  width: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const ContactsText = styled.p`
  line-height: 0;
`;
export const ContactsSpan = styled.span`
  font-weight: 700;
`;
export const ContactsButton = styled.button`
  border: 1px solid grey;
  background-color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 0;
  padding: 0;
  color: tomato;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: whitesmoke;
  }
`;
export const FilterInput = styled.input`
  margin: 5px 0;
  border: 1px solid grey;
  border-radius: 4px;
  height: 30px;
  padding-left: 10px;
  &:hover {
    -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  }
`;
