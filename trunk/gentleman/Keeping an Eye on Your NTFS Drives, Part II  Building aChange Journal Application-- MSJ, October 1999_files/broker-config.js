/*
Copyright (c) 2010, comScore Inc. All rights reserved.
version: 4.6.3
*/

COMSCORE.SiteRecruit.Broker.config = {
	version: "4.6.3",
	//TODO:Karl extend cookie enhancements to ie userdata
		testMode: false,
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoft.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",

		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '//[\\w\\.-]+/athome/(default\\.aspx)?$', c: 'inv_c_3331mt3-Static.js', f: 0.00824, p: 1 	}
	,{m: '//[\\w\\.-]+/athome/', c: 'inv_c_3331mt3.js', f: 0.00824, p: 0 	}
	,{m: '//[\\w\\.-]+/atwork', c: 'inv_c_3331mt5.js', f: 0.0159, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/athome/', c: 'inv_c_p15466742-au-372.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/athome/default\\.mspx$', c: 'inv_c_p15466742-au-372-flashfix.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/australia/business/', c: 'inv_c_p15466742-au-373.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/business/(default\\.aspx)?$', c: 'inv_c_p15466742-au-373-SB-FIXED.js', f: 0.3, p: 1 	}
	,{m: '//[\\w\\.-]+/australia/licensing/howtobuy/', c: 'inv_c_p15466742-AU-977.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/windows/', c: 'inv_c_p15466742-au-826.js', f: 0.052, p: 0 	}
	,{m: '//[\\w\\.-]+/canada/windows/', c: 'inv_c_p37131508-Canada.js', f: 0.138, p: 0 	}
	,{m: '//[\\w\\.-]+/de/de/(default\\.aspx)?$', c: 'inv_c_p15466742-p17637473-Germany-HP.js', f: 0.03, p: 0 	}
	,{m: '//[\\w\\.-]+/downloads/(en/|.*?displaylang=en)', c: 'inv_c_3331mt13_NEW_751-753.js', f: 0.0005, p: 0 	}
	,{m: '//[\\w\\.-]+/dynamics(/(?!dynamicsresearch.mspx|everyonegetsit|en/us/partner-login\\.aspx)|$)', c: 'inv_c_3331mt14_NEW-750.js', f: 0.238, p: 0 	}
	,{m: '//[\\w\\.-]+/dynamics/asmartmove/default\\.mspx', c: 'inv_c_3331mt14-SL-fix_NEW-750.js', f: 0.238, p: 3 	}
	,{m: '//[\\w\\.-]+/dynamics/default\\.mspx$', c: 'inv_c_3331mt14_flashfix_NEW-750.js', f: 0.276, p: 1 	}
	,{m: '//[\\w\\.-]+/en/au/', c: 'inv_c_p15466742-AU-HP-369.js', f: 0.05, p: 0 	}
	,{m: '//[\\w\\.-]+/en/us/default\\.aspx', c: 'inv_c_p15394611-US-HP.js', f: 0.00814, p: 0 	}
	,{m: '//[\\w\\.-]+/everybodysbusiness/en/us/', c: 'inv_c_p42493312-898.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/everybodysbusiness/en/us/.*banner=', c: 'inv_c_p42493312-898-DELAY.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/everybodysbusiness/en/us/ext/search\\.aspx$', c: 'inv_c_p42493312-EXCLUDE.js', f: 0, p: 0  ,halt: true 	}
	,{m: '//[\\w\\.-]+/fr/fr/(default\\.aspx)?$', c: 'inv_c_p15466742-France-HP.js', f: 0.04, p: 0 	}
	,{m: '//[\\w\\.-]+/france/windows/', c: 'inv_c_FR-p15466742_p37131508-Windows.js', f: 0.033, p: 0 	}
	,{m: '//[\\w\\.-]+/germany/branchen/', c: 'inv_c_DE-p15466742-Branchen.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/germany/server(/|$)', c: 'inv_c_DE-wss-p12038685.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/germany/windows(/|$)', c: 'inv_c_DE-p12038685-p37131508-Windows.js', f: 0.0257, p: 0 	}
	,{m: '//[\\w\\.-]+/it/it/', c: 'inv_c_p17637473_119.js', f: 0.012, p: 0 	}
	,{m: '//[\\w\\.-]+/italy', c: 'inv_c_p17637473_120.js', f: 0.008, p: 0 	}
	,{m: '//[\\w\\.-]+/ja/jp/', c: 'inv_c_p15466742-Japan-HP.js', f: 0.01, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/athome/', c: 'inv_c_JA-p15466742-athome.js', f: 0.0018, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/atwork/', c: 'inv_c_JA-p15466742-atwork.js', f: 0.007, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/business/', c: 'inv_c_JA-p15466742-business.js', f: 0.014, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/servers/', c: 'inv_c_JA-p15466742-servers.js', f: 0.23, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/technet/', c: 'inv_c_JA-p12038685-technet.js', f: 0.002, p: 0 	}
	,{m: '//[\\w\\.-]+/japan/windows(/(?!(downloads/ie/au\\.mspx)|(downloads/ie/iedelete\\.mspx))|$)', c: 'inv_c_JA-p15466742-p37131508-windows.js', f: 0.00365, p: 0 	}
	,{m: '//[\\w\\.-]+/learning/en/us', c: 'inv_c_3331mt42.js', f: 0.058, p: 0 	}
	,{m: '//[\\w\\.-]+/licensing(/(?!(servicecenter)|(licensewise/product\\.aspx)|(licensewise/program\\.aspx)|(mla/select\\.aspx)))', c: 'inv_c_3331mt43.js', f: 0.0645, p: 0 	}
	,{m: 's://[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC.js', f: 0.0035, p: 1 	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-China.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'zh-CN'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-China.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'zh-CN' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-France.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'fr' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-Germany.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'de' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-HongKong.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'zh-HK'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-HongKong.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'zh-HK' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter/', c: 'inv_c_p40652279-VLSC-Japan.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'ja' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-Portugal.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'pt-PT'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-Portugal.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'pt-PT' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-Russia.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'ru'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-Russia.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'ru' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-ES.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'es-ES'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-ES.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'es-ES' 			}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-TW.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
						{
					'element':'meta'
										,'attrib':'content'					,'attribValue':'zh-TW'
}
			]
			,cookie: [
				]
						}
	}
	,{m: '//[\\w\\.-]+/licensing/servicecenter', c: 'inv_c_p40652279-VLSC-TW.js', f: 0.0035, p: 2 		
		,prereqs:{
			content: [
				]
			,cookie: [
				]
			 ,language: 'zh-TW' 			}
	}
	,{m: '//[\\w\\.-]+/mscorp/twc/', c: 'inv_c_3625mt-906.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/protect(/(?!computer/updates/bulletins)|$)', c: 'inv_c_3331mt4.js', f: 0.0385, p: 0 	}
	,{m: '//[\\w\\.-]+/ru/ru', c: 'inv_c_p17637473-Russia-HP.js', f: 0.003, p: 0 	}
	,{m: '//[\\w\\.-]+/.*/ru/ru/.*', c: 'inv_c_p17637473-ru_ru.js', f: 0.008, p: 0 	}
	,{m: '//[\\w\\.-]+/rus', c: 'inv_c_p17637473-Russia.js', f: 0.003, p: 0 	}
	,{m: '//[\\w\\.-]+/security', c: 'inv_c_3331mt49.js', f: 0.00576, p: 0 	}
	,{m: '//[\\w\\.-]+/showcase/en/us/', c: 'inv_c_p23275586.js', f: 0.1112, p: 0 	}
	,{m: '//[\\w\\.-]+/sql/experience/(Default\\.aspx\\?loc=en)|(html/Default\\.aspx\\?loc=en)|(html/Events\\.aspx\\?loc=en)|(LearnSQL\\.aspx\\?h=t&loc=en)|(LearnSQL\\.aspx\\?loc=en)|(Events\\.aspx\\?loc=en)|(.*\\.wmv)', c: 'inv_c_blank.js', f: 0, p: 2 	}
	,{m: '//[\\w\\.-]+/sqlserver/2008/en/us/', c: 'inv_c_p43045451-SQL08-qInvite.js', f: 0.0588, p: 1 	}
	,{m: '//[\\w\\.-]+/student/', c: 'inv_c_p40683318.js', f: 0.07, p: 0 	}
	,{m: '//[\\w\\.-]+/studentstobusiness/', c: 'inv_c_p40683318-936.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/technet/(?!mnp_utility\\.mspx/(framesmenu|quicksearch|masthead)\\?url)', c: 'inv_c_p15808382-p26386365.js', f: 0.0043, p: 0 	}
	,{m: '//[\\w\\.-]+/technet/scriptcenter/', c: 'inv_c_p15808382-p26386365-TIER3.js', f: 0.0025, p: 1 	}
	,{m: '//[\\w\\.-]+/technet/security/', c: 'inv_c_p15808382-p26386365-TIER2.js', f: 0.0025, p: 1 	}
	,{m: '//[\\w\\.-]+/technet/(.*/subscriptions|support|community)/', c: 'inv_c_p15808382mt-technet.js', f: 0.0025, p: 1 	}
	,{m: '//[\\w\\.-]+/uc/en/us/about\\.aspx', c: 'inv_c_p42493312-901.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/uc/en/us/cost-savings\\.aspx', c: 'inv_c_p42493312-900.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/uc/en/us/email-and-telephone-integration\\.aspx', c: 'inv_c_p42493312-912.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/uk/windows/', c: 'inv_c_p37131508-UK.js', f: 0.0269, p: 0 	}
	,{m: '//[\\w\\.-]+/virtualization/', c: 'inv_c_p45200413.js', f: 0.13, p: 0 	}
	,{m: '//(sr-www|wwwstaging|www\\.microsoft)[\\w\\.-]+/windows/(?!enterprise)', c: 'inv_c_p25328149-p44121997-652.js', f: 0.00145, p: 0 	}
	,{m: '//[\\w\\.-]+/windows/buy/', c: 'inv_c_p25328149-Buy-WLS-p38104477-BUY-p44121997.js', f: 0.0635, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/compatibility/windows-7/en-us', c: 'inv_c_p43579784-p44121997-p25328149.js', f: 0.0069, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/(default\\.aspx)?$', c: 'inv_c_p25328149-HP_882-p44121997.js', f: 0.039, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/downloads/', c: 'inv_c_p25328149-downloads-p34934647.js', f: 0.0133, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/enterprise/(?!(default\\.(aspx|html|mspx))|$)', c: 'inv_c_p38361073-qInvite.js', f: 0.0495, p: 0 	}
	,{m: '//[\\w\\.-]+/windows/internet-explorer/(?!welcome\\.aspx)', c: 'inv_c_3331mt62-p25328149-p44121997-62.js', f: 0.0032, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/offers/', c: 'inv_c_p44121997-p25328149-942.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/pc-scout/default\\.aspx', c: 'inv_c_p25328149-Buy-p44121997.js', f: 0.177, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/social', c: 'inv_c_p44121997-p25328149-940.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/', c: 'inv_c_p34934887-p25328149-p44121997.js', f: 0.0069, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/videos-tours\\.aspx$', c: 'inv_c_p44121997-p34934887-p25328149-939.js', f: 0.276, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-7/what-is-windows-7\\.aspx$', c: 'inv_c_p44121997-p34934887-p25328149-941.js', f: 0.0486, p: 2 	}
	,{m: '//[\\w\\.-]+/windows/windows-vista(/|$)', c: 'inv_c_3331mt64-p25328149-p44121997.js', f: 0.0199, p: 1 	}
	,{m: '//[\\w\\.-]+/windowsembedded/en-us/', c: 'inv_c_3331mt174.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/windowsmobile/en-us/', c: 'inv_c_3331mt173.js', f: 0.00254, p: 0 	}
	,{m: '//[\\w\\.-]+/windowsmobile/en-us/totalaccess/', c: 'inv_c_p30393194_3331mt173.js', f: 0.00254, p: 1 	}
	,{m: '//[\\w\\.-]+/windowsserver2008/en/us/', c: 'inv_c_p42493312-902.js', f: 0.12, p: 0 	}
]
};
COMSCORE.SiteRecruit.Broker.run();