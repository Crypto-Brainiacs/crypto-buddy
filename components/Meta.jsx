import Head from 'next/head'



const Meta = ({title, keywords, description}) => {

	return (

		<Head>
			<meta charSet = 'utf-8' />
			<meta name='viewport' content ='width=device-width,initial-scale=1' />
			<meta name='keywords' content ={keywords} />
			<meta name='description' content ={description} />
			<link rel = 'icon' href='/favicon.ico' />
			<title>{title}</title>
		</Head>

	)

}

Meta.defaultProps = {
	title: 'Cryptobuddy- SocioFi platform',
	keywords: 'Web 3, SocioFi, Cryptocurrency',
	description: 'Connecting crypto enthusiasts and helping them make more money is what we do'

}

export default Meta