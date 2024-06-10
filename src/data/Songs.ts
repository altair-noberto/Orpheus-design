type Song = {
  id: number;
  path: string;
  title: string;
  artist: string;
  album: string;
  trackNum: number;
  release: Date;
};

export const songList: Array<Song> = [
  {
    id: 0,
    path: '/Trench/01 - Jumpsuit.mp3',
    title: 'Jumpsuit',
    artist: 'twenty one pilots',
    album: 'Trench',
    trackNum: 1,
    release: new Date(18, 10, 5),
  },
  {
    id: 1,
    path: '/Trench/02 - Levitate.mp3',
    title: 'Levitate',
    artist: 'twenty one pilots',
    album: 'Trench',
    trackNum: 2,
    release: new Date(18, 10, 5),
  },
  {
    id: 2,
    path: '/Blurryface/01 - Heavydirtysoul.mp3',
    title: 'Heavydirtysoul',
    artist: 'twenty one pilots',
    album: 'Blurryface',
    trackNum: 1,
    release: new Date(15, 8, 15),
  },
  {
    id: 3,
    path: '/Blurryface/02 - Stressed_Out.mp3',
    title: 'Stressed Out',
    artist: 'twenty one pilots',
    album: 'Blurryface',
    trackNum: 2,
    release: new Date(15, 8, 15),
  },
  {
    id: 4,
    path: '/Clancy/04 - Midwest_Indigo.mp3',
    title: 'Midwest Indigo',
    artist: 'twenty one pilots',
    album: 'Clancy',
    trackNum: 4,
    release: new Date(24, 5, 24),
  },
];
