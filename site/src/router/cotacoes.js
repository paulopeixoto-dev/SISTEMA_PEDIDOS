const cotacoesRoutes = [
	{
		path: '/cotacoes',
		redirect: '/cotacoes',
		children: [
			{
				path: '',
				name: 'cotacoesList',
				component: () => import('@/views/cotacoes/CotacoesList.vue')
			},
			{
				path: 'nova/:id?',
				name: 'novaCotacao',
				component: () => import('@/views/cotacoes/NovaCotacao.vue')
			},
			{
				path: ':id/analisar-aprovacoes',
				name: 'cotacao-analisar-aprovacoes',
				component: () => import('@/views/cotacoes/CotacaoAnalisarAprovacoes.vue')
			}
		]
	}
];

export default cotacoesRoutes;
