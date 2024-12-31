import {
  useQuery,
} from '@tanstack/react-query'
import {GetCustomer} from './apiCustomer'


export function useGetCustomer() {
  const {isLoading, isPending, data, error} = useQuery({ queryKey: ['customers'], queryFn: GetCustomer })
  return {isLoading, isPending, data, error}
}
