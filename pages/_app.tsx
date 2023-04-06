import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/index";
import FormProvider from "@/provider/FormProvider";
import Toast from "../reusableComponents/ReactToast/index";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FormProvider>
          <Layout>
            <Component {...pageProps} />
            <Toast />
          </Layout>
        </FormProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
