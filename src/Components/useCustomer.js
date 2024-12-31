import {
  useMutation,
  useQuery,useQueryClient
} from '@tanstack/react-query'
import {GetCustomer,AddCustomer} from './apiCustomer'


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
    },
    onSuccess:()=>{
      queryClient.invalidateQueries("customers")
    },
  })
  return {addCustomer,isAdding}
}
