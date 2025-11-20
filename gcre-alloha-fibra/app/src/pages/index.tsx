import { GetStaticProps } from 'next';

interface HomeProps {
  listTickets: {
    priceId: string;
    amount: string;
  }
}
export default function Home({ listTickets }: HomeProps) {
  return (
    <>
      <head>
        <title>Title</title>
      </head>
      <main >
        <section >
         <text>Menu de filtragem da listagem de tickets</text>
         <text>Listagem de tickets</text>
        </section>
      </main>
    </>
  )
}

/*Exemplo de uso do Stripe com Static Props coletando um preço de produto para exibir na pagina atualizando a cada 24h
//Usaremos esse exemplo porém com listagem direto do banco de dados SUPABASE posteriormente
export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1IbBoMFDkq8qHYkKgPA7FAQZ', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount /100),
  }; 

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24h
  }
}
*/
