import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  GetCustomer,
  AddCustomer,
  DelCustomer,
  GetCustomerDetail,
  AddAddress as addAddressApi,
  UpdateCustomer as UpdateCustomerApi,
  GetAddDetail,
  AddService as addServiceApi,
  GetService,
  DelService,
  UpdateAddress as updateAddressApi,
  UpdateService as updateServiceApi
} from "./apiCustomer";
import toast from "react-hot-toast";
import {z} from 'zod'

const serviceSchema = z.object({
  id:z.number(),
  service_date:z.string(),
  keluhan:z.string(),
  tindakan:z.string(),
  hasil:z.string(),
  img_url:z.string().nullable()
})

//Customer 

export function useGetCustomer() {
  const { isLoading, isPending, data, error } = useQuery({
    queryKey: ["customers"],
    queryFn: GetCustomer,
  });
  return { isLoading, isPending, data, error };
}

export function useGetCustomerDetail(id) {
  // console.log(id)
  const { isLoading, isPending, data, error } = useQuery({
    queryKey: ["customer", id],
    queryFn: () => GetCustomerDetail(id),
  });
  return { isLoading, isPending, data, error };
}

export function useAddCustomer() {
  const queryClient = useQueryClient();
  const { mutate: addCustomer, isPending: isAdding } = useMutation({
    mutationFn: AddCustomer,
    onError: () => {
      toast.error("error add customer.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("customers");
      toast.success("Customer successfuly added");
    },
  });
  return { addCustomer, isAdding };
}

export function useUpdateCustomer() {
  const queryClient = useQueryClient();
  const { mutate: updateCustomer, isPending: isUpdating } = useMutation({
    mutationFn: UpdateCustomerApi,
    onError: () => {
      toast.error("error update customer.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("customer");
      toast.success("customer successfuly updated");
    },
  });
  return { updateCustomer, isUpdating };
}

export function useDeleteCustomer() {
  const queryClient = useQueryClient();
  const { mutate: DeleteCustomer, isPending: isDeleting } = useMutation({
    mutationFn: DelCustomer,
    onError: () => {
      toast.error("error delete customer.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("customers");
      toast.success("Customer successfuly deleted");
    },
  });
  return { DeleteCustomer, isDeleting };
}

// Address

export function useAddAddress() {
  const queryClient = useQueryClient();
  const { mutate: addAddress, isPending: isAddingAddress } = useMutation({
    mutationFn: addAddressApi,
    onError: () => {
      toast.error("error add address.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("customer");
      toast.success("address succesfully added.");
    },
  });
  return { addAddress, isAddingAddress };
}

export function useGetAddressDetail(id) {
  // console.log(id);
  const { isLoading, isPending, data, error } = useQuery({
    queryKey: ["address", id],
    queryFn: () => GetAddDetail(id),
  });
  return { isLoading, isPending, data, error };
}

export function useUpdateAddress() {
  const queryClient = useQueryClient();
  const { mutate: UpdateAddress, isPending: isUpdating } = useMutation({
    mutationFn: updateAddressApi,
    onError: () => {
      toast.error("error update alamat.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("address");
      toast.success("alamat successfuly updated");
    },
  });
  return { UpdateAddress, isUpdating };
}

// Service

export function useAddService(){
  const {mutate: AddService ,isPending:isAddingService} = useMutation({
    mutationFn:addServiceApi,
    onError: () => {
      toast.error("error add service.");
    },
    onSuccess: () => {
      toast.success("service succesfully added.");
    },
  })
  return {AddService,isAddingService}
}

export function useGetService(id){
  const { isLoading, isPending, data, error } = useQuery({
    queryKey: ["service", id],
    queryFn: () => GetService(id),
  });
  // console.log(data)
  const parseResult = serviceSchema.safeParse(data)
  // console.log(parseResult)
  return { isLoading, isPending, data:parseResult, error }; 
}

export function useDelService() {
  const queryClient = useQueryClient();
  const {mutate: DeleteService, isPending: isDeleting} = useMutation({ mutationFn: DelService ,
    onError: () => {
      toast.error("error delete service.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("address");
      toast.success("Service successfuly deleted");
    },
  });
  return {DeleteService,isDeleting}
}

export function useUpadteService(){
  const queryClient = useQueryClient();
  const {mutate: UpdateService, isPending: isUpdating} =  useMutation({
    mutationFn: updateServiceApi,
    onError: () => {
      toast.error("error update alamat.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("service");
      toast.success("alamat successfuly updated");
    },
  })
  return { UpdateService, isUpdating };
}