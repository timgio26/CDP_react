import styled from "styled-components";
import { Map } from "./Map";
import { useState } from "react";
import { useAddAddress } from "./useCustomer";
const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-size: 16px;
  color: #333;
`;

const Input = styled.textarea`
  width: 100%;
  padding: 10px;
  /* margin-bottom: 15px; */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  height: 80px;
`;

const ButtonContainer = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  /* cursor: pointer; */
`;
const CancelButton = styled(Button)`
  background-color: #cae2ff;
  color: #202a78;
  &:hover {
    opacity: 0.8;
  }
`;
const AddAddressButton = styled(Button)`
  background-color: #7989ff;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export function FormAlamat({ onClose,custId:customer_id}) {
  const  {addAddress,isAddingAddress} = useAddAddress()
  const [latlng,setLatLng] = useState({lat:null,lng:null})
  const [kategori,setKategori] = useState("")
  const [alamat,setAlamat] = useState("")

  // console.log(isAddingAddress)

  function handleCancel() {
    onClose();
  }

  function handleSubmit(e){
    e.preventDefault()
    addAddress({
      customer_id,
      address:alamat,
      lat:`${latlng.lat}`.slice(0,9),
      lng:`${latlng.lng}`.slice(0,9),
      category:kategori
    },{
      onSuccess: handleCancel
    })
  }

  return (
    <Form action="">
      <Label htmlFor="">Alamat</Label>
      <Input
        type="text"
        value={alamat}
        onChange={(e) => setAlamat(e.target.value)}
      />
      <div className="flex flex-col">
        <label htmlFor="kategori">Kategori</label>
        <input
          type="text"
          name="kategori"
          id="kategori"
          className="border border-[#ccc] rounded p-2"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        />
      </div>
      <div className="w-full aspect-video my-2">
        <Map latlng={latlng} setLatLng={setLatLng} />
      </div>
      <ButtonContainer>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        <AddAddressButton
          onClick={handleSubmit}
          disabled={alamat.length < 5 || isAddingAddress}
          className={
            alamat.length < 5 || isAddingAddress
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }
        >
          Add Address
        </AddAddressButton>
      </ButtonContainer>
    </Form>
  );
}
