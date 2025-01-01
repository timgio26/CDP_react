import {
  useMutation,
  useQuery,useQueryClient
} from '@tanstack/react-query'
import {GetCustomer,AddCustomer,DelCustomer} from './apiCustomer'
import toast, { Toaster } from 'react-hot-toast';


export function useGetCustomer() {
  const {isLoading, isPending, data, error} = useQuery({ queryKey: ['customers'], queryFn: GetCustomer })
  return {isLoading, isPending, data, error}
}

export function useAddCustomer(){
  const queryClient = useQueryClient()
  const {mutate:addCustomer,isPending:isAdding} =  useMutation({
    mutationFn:AddCustomer,
    onError:()=>{
      console.log('error add customer')
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
      console.log('error delete customer')
      toast.error('error delete customer.')
    },
    onSuccess:()=>{
      queryClient.invalidateQueries("customers")
      toast.success('Customer successfuly deleted')
    },
  })
  return {DeleteCustomer,isDeleting} 
}
