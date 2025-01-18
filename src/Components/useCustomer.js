import {
  useMutation,
  useQuery,useQueryClient
} from '@tanstack/react-query'
import {GetCustomer,AddCustomer,DelCustomer, GetCustomerDetail,AddAddress as addAddressApi} from './apiCustomer'
import toast from 'react-hot-toast';


export function useGetCustomer() {
  const {isLoading, isPending, data, error} = useQuery({ queryKey: ['customers'], queryFn: GetCustomer})
  return {isLoading, isPending, data, error}
}

export function useGetCustomerDetail(id) {
  // console.log(id)
  const {isLoading, isPending, data, error} = useQuery({ queryKey: ['customer',id], queryFn: ()=>GetCustomerDetail(id) })
  return {isLoading, isPending, data, error}
}

export function useAddCustomer(){
  const queryClient = useQueryClient()
  const {mutate:addCustomer,isPending:isAdding} =  useMutation({
    mutationFn:AddCustomer,
    onError:()=>{
      toast.error('error add customer.')
    },
    onSuccess:()=>{
      queryClient.invalidateQueries("customers")
      toast.success('Customer successfuly added')
    },
  })
  return {addCustomer,isAdding}
}

export function useDeleteCustomer(){
  const queryClient = useQueryClient()
  const {mutate:DeleteCustomer,isPending:isDeleting} =  useMutation({
    mutationFn:DelCustomer,
    onError:()=>{
      toast.error('error delete customer.')
    },
    onSuccess:()=>{
      queryClient.invalidateQueries("customers")
      toast.success('Customer successfuly deleted')
    },
  })
  return {DeleteCustomer,isDeleting} 
}

export function useAddAddress(){
  const {mutate:addAddress,isPending:isAddingAddress} = useMutation({
    mutationFn:addAddressApi,
    onError:()=>{
      toast.error('error add address.')
    },
    onSuccess:()=>{
      toast.success('address succesfully added.')
    }
  })
  return  {addAddress,isAddingAddress}
}
