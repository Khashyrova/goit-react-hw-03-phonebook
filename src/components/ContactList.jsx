import {
  Contacts,
  ContactsTittle,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsSpan,
  ContactsButton,
} from './Styles.module';
const ContactList = ({ contacts, onRemove, children }) => {
  return (
    <Contacts>
      <ContactsTittle>Contacts</ContactsTittle>
      {children}
      <ContactsList>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <ContactsItem key={contact.id}>
                  <ContactsText>
                    <ContactsSpan>{contact.name} : </ContactsSpan>
                    {contact.number}
                  </ContactsText>
                  <ContactsButton
                    onClick={() => {
                      onRemove(contact.id);
                    }}
                  >
                    ⛌
                  </ContactsButton>
                </ContactsItem>
              );
            })}
          </>
        )}
      </ContactsList>
    </Contacts>
  );
};

export default ContactList;
