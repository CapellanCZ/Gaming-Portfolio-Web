// Props for Yuna profile
// Parent component

const YunaProfileProps = {
  avatar: '/src/assets/ako.jpg',
  name: 'Catherine Capellan',
  ign: '11kyupi',
  headerDescription: 'Tap the button to view more of my games that I love to play.',
  games: [
    {
      title: 'Red Dead Redemption 2',
      description: 'Open-world western adventure with stunning visuals and immersive storytelling',
      genre: 'Action-Adventure',
      hours: '450+',
      status: 'Completed',
      color: 'red-500',
      image: 'https://cdn2.steamgriddb.com/icon/fb7f07c358989bdf148e4a0c5a87e088/32/256x256.png'
    },
    {
      title: 'Stardew Valley',
      description: 'Cozy farming simulation with charming pixel art and relaxing gameplay',
      genre: 'Simulation',
      hours: '320+',
      status: 'Currently Playing',
      color: 'green-500',
      image: 'https://cdn2.steamgriddb.com/icon/2119b8d43eafcf353e07d7cb5554170b/32/256x256.png'
    },
    {
      title: 'Oxygen Not Included',
      description: 'Complex space colony simulation requiring strategic resource management',
      genre: 'Simulation',
      hours: '280+',
      status: 'Completed',
      color: 'blue-500',
      image: 'https://imgs.search.brave.com/JdnRED60hD6IXC9tRoNhYVMjN41DpkTSI0LobHJtsPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2I5/ZWQ4MWUyLWZlOGIt/NDEzOS04ODMwLTM1/ZGFiYzUyNTZmYS9k/Ym1rZHRnLTA2MjUx/MTQxLWExOWUtNGU4/OC05NTU2LWNjZmFj/MDQwMTM4YS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/Mkk1WldRNE1XVXlM/V1psT0dJdE5ERXpP/UzA0T0RNd0xUTTFa/R0ZpWXpVeU5UWm1Z/Vnd2WkdKdGEyUjBa/eTB3TmpJMU1URTBN/UzFoTVRsbExUUmxP/RGd0T1RVMU5pMWpZ/MlpoWXpBME1ERXpP/R0V1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuU1cwMWdKc3VH/YWF4Zmh0M3hZSl9y/UW5wdi1CcXlNT2Vk/NG80bzdWWFhlcw'
    },
    {
      title: 'Cyberpunk 2077',
      description: 'Futuristic RPG set in a dystopian Night City with stunning visuals',
      genre: 'RPG',
      hours: '180+',
      status: 'Completed',
      color: 'yellow-500',
      image: 'https://imgs.search.brave.com/ObJbhJAHnd705siGDIdrZrOYXSr5t_p30kZeXrak6_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNC9DeWJl/cnB1bmstMjA3Ny1U/cmFuc3BhcmVudC5w/bmc '
    },
    {
      title: 'The Witcher 3: Wild Hunt',
      description: 'Epic fantasy RPG with incredible story and beautiful open world',
      genre: 'RPG',
      hours: '220+',
      status: 'Completed',
      color: 'black',
      image: 'https://imgs.search.brave.com/oZHbUi825MiBzX_rBe6bKe5Y3hBuE6XGDNeNzwCyBik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjIvVGhl/LVdpdGNoZXItMy1X/aWxkLUh1bnQtTG9n/by1UcmFuc3BhcmVu/dC1QTkcucG5n'
    },
    {
      title: 'Minecraft',
      description: 'Creative sandbox game with infinite possibilities for building and exploration',
      genre: 'Sandbox',
      hours: '500+',
      status: 'Currently Playing',
      color: 'green-500',
      image: 'https://imgs.search.brave.com/9YuEZ4MZ2Worbo1zJGCsCNvTccs0CqeyDTNM4Ms3fyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjY5OS9Q/TkcvNTEyL21pbmVj/cmFmdF9sb2dvX2lj/b25fMTY4OTc0LnBu/Zw'
    },
    {
      title: 'Terraria',
      description: '2D adventure game with deep crafting and exploration mechanics',
      genre: 'Adventure',
      hours: '150+',
      status: 'Completed',
      color: 'green-500',
      image: 'https://imgs.search.brave.com/EpH_hb2nt0qhX5gzd4HHIt7WGcwFLYm97xiUnuOkfbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZXJy/YXJpYS53aWtpLmdn/L2ltYWdlcy81LzVh/L0FwcF9pY29uXzEu/M19VcGRhdGUucG5n/P2MzMDFlMw'
    },
    {
      title: 'Hollow Knight',
      description: 'Beautiful metroidvania with challenging gameplay and atmospheric world',
      genre: 'Metroidvania',
      hours: '90+',
      status: 'Completed',
      color: 'gray-500',
      image: 'https://imgs.search.brave.com/_Bx0RlNZzRtxGMIMB1Lri3-l27TWhP4PUSnKvJB3cbw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjIvSG9s/bG93LUtuaWdodC1Q/TkctVHJhbnNwYXJl/bnQtUGljdHVyZS5w/bmc'
    },
    {
      title: 'Roblox',
      description: 'Platform for creating and playing user-generated games with friends',
      genre: 'Platform/Social',
      hours: '200+',
      status: 'Currently Playing',
      color: 'white',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Roblox_Logo_2025.png'
    }
  ],
  steam: {
    status: 'Online',
    level: 47,
    games: 8,
    hours: '2.1k',
    profile: 'Steam Profile',
  },
  about: (
    <>
      I love immersive story-driven adventures, complex simulation games, and cozy farming experiences. From exploring the Wild West to managing space colonies.
    </>
  ),
  achievements: [
    {
      title: 'Red Dead Redemption 2',
      description: '100% Story Completion',
      color: 'red-500',
      date: '3 days ago',
    },
    {
      title: 'Oxygen Not Included',
      description: 'Cycle 1000 Achievement',
      color: 'blue-500',
      date: '1 week ago',
    },
    {
      title: 'Stardew Valley',
      description: 'Perfection Achievement',
      color: 'green-500',
      date: '2 weeks ago',
    },
    {
      title: 'Cyberpunk 2077',
      description: 'Legendary Status',
      color: 'yellow-500',
      date: '1 month ago',
    },
    {
      title: 'Roblox',
      description: 'Developer Excellence',
      color: 'white',
      date: '6 months ago',
    },
  ],
  socials: [
    {
      icon: 'steam',
      url: 'https://cdn2.steamgriddb.com/icon/fb7f07c358989bdf148e4a0c5a87e088/32/256x256.png',
      bg: 'bg-red-500',
      color: 'text-white',
    },
    {
      icon: 'steam',
      url: 'https://cdn2.steamgriddb.com/icon/2119b8d43eafcf353e07d7cb5554170b/32/256x256.png',
      bg: 'bg-green-600',
      color: 'text-white',
    },
    {
      icon: 'steam',
      url: 'https://cdn2.steamgriddb.com/icon_thumb/11e162eaa8ae8c204128cb0377fff7ea.png',
      bg: 'bg-zinc-50',
      color: 'text-black',
    },
    {
      icon: 'steam',
      url: 'https://cdn2.steamgriddb.com/icon/9b8e3691c7140875b5fcc94cfc354c60/32/256x256.png',
      bg: 'bg-blue-500',
      color: 'text-white',
    },
  ],
};

export default YunaProfileProps;
