const characters = [
    {
        name: "Aino",
        rarity: 4,
        element: "Hydro",
        icon: "Aino.png",

    },
    {
        name: "Albedo",
        rarity: 5,
        element: "Geo",
        icon: "Albedo.png"
    },
    {
        name: "Alhaitham",
        rarity: 5,
        element: "Dendro",
        icon: "Alhaitham.png"
    },
    {
        name: "Aloy",
        rarity: 5,
        element: "Cryo",
        icon: "Aloy.png"
    },
    {
        name: "Amber",
        rarity: 4,
        element: "Pyro",
        icon: "Amber.png"
    },
    {
        name: "Arlecchino",
        rarity: 5,
        element: "Pyro",
        icon: "Arlecchino.png"
    },
    {
        name: "Kamisato Ayaka",
        rarity: 5,
        element: "Cryo",
        icon: "Ayaka.png"
    },
    {
        name: "Kamisato Ayato",
        rarity: 5,
        element: "Hydro",
        icon: "Ayato.png"
    },
    {
        name: "Baizhu",
        rarity: 5,
        element: "Dendro",
        icon: "Baizhu.png"
    },
    {
        name: "Barbara",
        rarity: 4,
        element: "Hydro",
        icon: "Barbara.png"
    },
    {
        name: "Beidou",
        rarity: 4,
        element: "Electro",
        icon: "Beidou.png"
    },
    {
        name: "Bennett",
        rarity: 4,
        element: "Pyro",
        icon: "Bennett.png"
    },
    {
        name: "Candace",
        rarity: 4,
        element: "Hydro",
        icon: "Candace.png"
    },
    {
        name: "Charlotte",
        rarity: 4,
        element: "Cryo",
        icon: "Charlotte.png"
    },
    {
        name: "Chasca",
        rarity: 5,
        element: "Anemo",
        icon: "Chasca.png"
    },
    {
        name: "Chevreuse",
        rarity: 4,
        element: "Pyro",
        icon: "Chevreuse.png"
    },
    {
        name: "Chiori",
        rarity: 5,
        element: "Geo",
        icon: "Chiori.png"
    },
    {
        name: "Chongyun",
        rarity: 4,
        element: "Cryo",
        icon: "Chongyun.png"
    },
    {
        name: "Citlali",
        rarity: 5,
        element: "Cryo",
        icon: "Citlali.png"
    },
    {
        name: "Clorinde",
        rarity: 5,
        element: "Electro",
        icon: "Clorinde.png"
    },
    {
        name: "Collei",
        rarity: 4,
        element: "Dendro",
        icon: "Collei.png"
    },
    {
        name: "Columbina",
        rarity: 5,
        element: "Hydro",
        icon: "Columbina.png"
    },
    {
        name: "Cyno",
        rarity: 5,
        element: "Electro",
        icon: "Cyno.png"
    },
    {
        name: "Dahlia",
        rarity: 4,
        element: "Hydro",
        icon: "Dahlia.png"
    },
    {
        name: "Dehya",
        rarity: 5,
        element: "Pyro",
        icon: "Dehya.png"
    },
    {
        name: "Diluc",
        rarity: 5,
        element: "Pyro",
        icon: "Diluc.png"
    },
    {
        name: "Diona",
        rarity: 4,
        element: "Cryo",
        icon: "Diona.png"
    },
    {
        name: "Dori",
        rarity: 4,
        element: "Electro",
        icon: "Dori.png"
    },
    {
        name: "Durin",
        rarity: 5,
        element: "Pyro",
        icon: "Durin.png"
    },
    {
        name: "Emilie",
        rarity: 5,
        element: "Dendro",
        icon: "Emilie.png"
    },
    {
        name: "Escoffier",
        rarity: 5,
        element: "Cryo",
        icon: "Escoffier.png"
    },
    {
        name: "Eula",
        rarity: 5,
        element: "Cryo",
        icon: "Eula.png"
    },
    {
        name: "Faruzan",
        rarity: 4,
        element: "Anemo",
        icon: "Faruzan.png"
    },
    {
        name: "Fischl",
        rarity: 4,
        element: "Electro",
        icon: "Fischl.png"
    },
    {
        name: "Flins",
        rarity: 5,
        element: "Electro",
        icon: "Flins.png"
    },
    {
        name: "Freminet",
        rarity: 4,
        element: "Cryo",
        icon: "Freminet.png"
    },
    {
        name: "Furina",
        rarity: 5,
        element: "Hydro",
        icon: "Furina.png"
    },
    {
        name: "Gaming",
        rarity: 4,
        element: "Pyro",
        icon: "Gaming.png"
    },
    {
        name: "Ganyu",
        rarity: 5,
        element: "Cryo",
        icon: "Ganyu.png"
    },
    {
        name: "Gorou",
        rarity: 4,
        element: "Geo",
        icon: "Gorou.png"
    },
    {
        name: "Heizou",
        rarity: 4,
        element: "Anemo",
        icon: "Heizou.png"
    },
    {
        name: "Hu Tao",
        rarity: 5,
        element: "Pyro",
        icon: "Hutao.png"
    },
    {
        name: "Iansan",
        rarity: 4,
        element: "Electro",
        icon: "Iansan.png"
    },
    {
        name: "Ifa",
        rarity: 4,
        element: "Anemo",
        icon: "Ifa.png"
    },
    {
        name: "Illuga",
        rarity: 4,
        element: "Geo",
        icon: "Illuga.png"
    },
    {
        name: "Ineffa",
        rarity: 5,
        element: "Electro",
        icon: "Ineffa.png"
    },
    {
        name: "Arataki Itto",
        rarity: 5,
        element: "Geo",
        icon: "Itto.png"
    },
    {
        name: "Jahoda",
        rarity: 4,
        element: "Anemo",
        icon: "Jahoda.png"
    },
    {
        name: "Jean",
        rarity: 5,
        element: "Anemo",
        icon: "Jean.png"
    },
    {
        name: "Kachina",
        rarity: 4,
        element: "Geo",
        icon: "Kachina.png"
    },
    {
        name: "Kaeya",
        rarity: 4,
        element: "Cryo",
        icon: "Kaeya.png"
    },
    {
        name: "Kaveh",
        rarity: 4,
        element: "Dendro",
        icon: "Kaveh.png"
    },
    {
        name: "Kaedehara Kazuha",
        rarity: 5,
        element: "Anemo",
        icon: "Kazuha.png"
    },
    {
        name: "Keqing",
        rarity: 5,
        element: "Electro",
        icon: "Keqing.png"
    },
    {
        name: "Kinich",
        rarity: 5,
        element: "Dendro",
        icon: "Kinich.png"
    },
    {
        name: "Kirara",
        rarity: 4,
        element: "Dendro",
        icon: "Kirara.png"
    },
    {
        name: "Klee",
        rarity: 5,
        element: "Pyro",
        icon: "Klee.png"
    },
    {
        name: "Sangonomiya Kokomi",
        rarity: 5,
        element: "Hydro",
        icon: "Kokomi.png"
    },
    {
        name: "Lan Yan",
        rarity: 4,
        element: "Anemo",
        icon: "Lanyan.png"
    },
    {
        name: "Lauma",
        rarity: 5,
        element: "Dendro",
        icon: "Lauma.png"
    },
    {
        name: "Layla",
        rarity: 4,
        element: "Cryo",
        icon: "Layla.png"
    },
    {
        name: "Linnea",
        rarity: 5,
        element: "Geo",
        icon: "Linnea.png"
    },
    {
        name: "Lisa",
        rarity: 4,
        element: "Electro",
        icon: "Lisa.png"
    },
    {
        name: "Lohen",
        rarity: 5,
        element: "Cryo",
        icon: "Lohen.png"
    },
    {
        name: "Lynette",
        rarity: 4,
        element: "Anemo",
        icon: "Lynette.png"
    },
    {
        name: "Lyney",
        rarity: 5,
        element: "Pyro",
        icon: "Lyney.png"
    },
    {
        name: "Mavuika",
        rarity: 5,
        element: "Pyro",
        icon: "Mavuika.png"
    },
    {
        name: "Mika",
        rarity: 4,
        element: "Cryo",
        icon: "Mika.png"
    },
    {
        name: "Yae Miko",
        rarity: 5,
        element: "Electro",
        icon: "Miko.png"
    },
    {
        name: "Yumemizuki Mizuki",
        rarity: 5,
        element: "Anemo",
        icon: "Mizuki.png"
    },
    {
        name: "Mona",
        rarity: 5,
        element: "Hydro",
        icon: "Mona.png"
    },
    {
        name: "Mualani",
        rarity: 5,
        element: "Hydro",
        icon: "Mualani.png"
    },
    {
        name: "Nahida",
        rarity: 5,
        element: "Dendro",
        icon: "Nahida.png"
    },
    {
        name: "Navia",
        rarity: 5,
        element: "Geo",
        icon: "Navia.png"
    },
    {
        name: "Nefer",
        rarity: 5,
        element: "Dendro",
        icon: "Nefer.png"
    },
    {
        name: "Neuvillette",
        rarity: 5,
        element: "Hydro",
        icon: "Neuvillette.png"
    },
    {
        name: "Nicole",
        rarity: 5,
        element: "Pyro",
        icon: "Nicole.png"
    },
    {
        name: "Nilou",
        rarity: 5,
        element: "Hydro",
        icon: "Nilou.png"
    },
    {
        name: "Ningguang",
        rarity: 4,
        element: "Geo",
        icon: "Ningguang.png"
    },
    {
        name: "Noelle",
        rarity: 4,
        element: "Geo",
        icon: "Noelle.png"
    },
    {
        name: "Ororon",
        rarity: 4,
        element: "Electro",
        icon: "Ororon.png"
    },
    {
        name: "Prune",
        rarity: 4,
        element: "Anemo",
        icon: "Prune.png"
    },
    {
        name: "Qiqi",
        rarity: 4,
        element: "Cryo",
        icon: "Qiqi.png"
    },
    {
        name: "Raiden Shogun",
        rarity: 5,
        element: "Electro",
        icon: "Raiden.png"
    },
    {
        name: "Razor",
        rarity: 4,
        element: "Electro",
        icon: "Razor.png"
    },
    {
        name: "Rosaria",
        rarity: 4,
        element: "Cryo",
        icon: "Rosaria.png"
    },
    {
        name: "Kujou Sara",
        rarity: 4,
        element: "Electro",
        icon: "Sara.png"
    },
    {
        name: "Sayu",
        rarity: 4,
        element: "Anemo",
        icon: "Sayu.png"
    },
    {
        name: "Sethos",
        rarity: 4,
        element: "Electro",
        icon: "Sethos.png"
    },
    {
        name: "Shenhe",
        rarity: 5,
        element: "Cryo",
        icon: "Shenhe.png"
    },
    {
        name: "Kuki Shinobu",
        rarity: 4,
        element: "Electro",
        icon: "Shinobu.png"
    },
    {
        name: "Sigewinne",
        rarity: 5,
        element: "Hydro",
        icon: "Sigewinne.png"
    },
    {
        name: "Skirk",
        rarity: 5,
        element: "Cryo",
        icon: "Skirk.png"
    },
    {
        name: "Sucrose",
        rarity: 4,
        element: "Anemo",
        icon: "Sucrose.png"
    },
    {
        name: "Tartaglia",
        rarity: 5,
        element: "Hydro",
        icon: "Tartaglia.png"
    },
    {
        name: "Thoma",
        rarity: 4,
        element: "Pyro",
        icon: "Thoma.png"
    },
    {
        name: "Tighnari",
        rarity: 5,
        element: "Dendro",
        icon: "Tighnari.png"
    },
    {
        name: "Varesa",
        rarity: 5,
        element: "Electro",
        icon: "Varesa.png"
    },
    {
        name: "Varka",
        rarity: 5,
        element: "Anemo",
        icon: "Varka.png"
    },
    {
        name: "Venti",
        rarity: 5,
        element: "Anemo",
        icon: "Venti.png"
    },
    {
        name: "Wanderer",
        rarity: 5,
        element: "Anemo",
        icon: "Wanderer.png"
    },
    {
        name: "Wriothesley",
        rarity: 5,
        element: "Cryo",
        icon: "Wriothesley.png"
    },
    {
        name: "Xiangling",
        rarity: 4,
        element: "Pyro",
        icon: "Xiangling.png"
    },
    {
        name: "Xianyun",
        rarity: 5,
        element: "Anemo",
        icon: "Xianyun.png"
    },
    {
        name: "Xiao",
        rarity: 5,
        element: "Anemo",
        icon: "Xiao.png"
    },
    {
        name: "Xilonen",
        rarity: 5,
        element: "Geo",
        icon: "Xilonen.png"
    },
    {
        name: "Xingqiu",
        rarity: 4,
        element: "Hydro",
        icon: "Xingqiu.png"
    },
    {
        name: "Xinyan",
        rarity: 4,
        element: "Pyro",
        icon: "Xinyan.png"
    },
    {
        name: "Yanfei",
        rarity: 4,
        element: "Pyro",
        icon: "Yanfei.png"
    },
    {
        name: "Yaoyao",
        rarity: 4,
        element: "Dendro",
        icon: "Yaoyao.png"
    },
    {
        name: "Yelan",
        rarity: 5,
        element: "Hydro",
        icon: "Yelan.png"
    },
    {
        name: "Yoimiya",
        rarity: 5,
        element: "Pyro",
        icon: "Yoimiya.png"
    },
    {
        name: "Yun Jin",
        rarity: 4,
        element: "Geo",
        icon: "Yunjin.png"
    },
    {
        name: "Zhongli",
        rarity: 5,
        element: "Geo",
        icon: "Zhongli.png"
    },
    {
        name: "Zibai",
        rarity: 5,
        element: "Geo",
        icon: "Zibai.png"
    },
]
export default characters;