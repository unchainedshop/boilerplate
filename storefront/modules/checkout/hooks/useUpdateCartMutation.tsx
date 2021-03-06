import { useMutation, gql } from '@apollo/client';

const UpdateCartMutation = gql`
  mutation UpdateCart($billingAddress: AddressInput, $contact: ContactInput) {
    updateCart(billingAddress: $billingAddress, contact: $contact) {
      _id
    }
  }
`;

const useUpdateCartMutation = () => {
  const [updateCartMutation] = useMutation(UpdateCartMutation, {
    refetchQueries: ['UserQuery', 'cart'],
  });

  const updateCart = async ({
    contact = undefined,
    billingAddress = undefined,
  }) => {
    return await updateCartMutation({ variables: { contact, billingAddress } });
  };

  return {
    updateCart,
  };
};

export default useUpdateCartMutation;
