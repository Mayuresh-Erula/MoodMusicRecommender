// Share types between FE and BE using monorepo shared-types
// import { Song } from '@mood-music/shared-types'
import { Song } from '../../../frontend/src/types/index'

export const SONG_DATABASE: Record<string, Song[]> = {
  "happy": [
    {
      "id": "1",
      "title": "Happy",
      "artist": "Pharrell Williams",
      "album": "Girl",
      "duration": "3:53",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4c/ba/89/4cba89f1-1a8a-3f33-b3ac-d88bcad8b996/mzaf_17135561476274403451.plus.aac.p.m4a"
    },
    {
      "id": "2",
      "title": "Walking on Sunshine",
      "artist": "Katrina & The Waves",
      "album": "Walking on Sunshine",
      "duration": "3:58",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fe/af/a9/feafa950-3d4d-6eb4-5c5c-a4170d27a605/mzaf_14050415466863438352.plus.aac.p.m4a"
    },
    {
      "id": "3",
      "title": "Good as Hell",
      "artist": "Lizzo",
      "album": "Cuz I Love You",
      "duration": "2:39",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/89/6c/a2/896ca254-3673-f66d-261c-30644eb5004a/mzaf_12055454568932010560.plus.aac.p.m4a"
    },
    {
      "id": "4",
      "title": "Can't Stop The Feeling",
      "artist": "Justin Timberlake",
      "album": "Trolls OST",
      "duration": "3:56",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/86/41/2d/86412d20-2f4d-39fc-221b-3f643d7c99c6/mzaf_9909715182585785919.plus.aac.p.m4a"
    },
    {
      "id": "5",
      "title": "On Top of the World",
      "artist": "Imagine Dragons",
      "album": "Night Visions",
      "duration": "3:12",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cf/89/7b/cf897bba-9f5a-0621-df08-b6d7c83bf654/mzaf_7096659419087440090.plus.aac.p.m4a"
    }
  ],
  "sad": [
    {
      "id": "6",
      "title": "Someone Like You",
      "artist": "Adele",
      "album": "21",
      "duration": "4:45",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ef/18/7b/ef187b7d-f487-e935-4ca1-af5748313710/mzaf_8455263230305249048.plus.aac.p.m4a"
    },
    {
      "id": "7",
      "title": "Fix You",
      "artist": "Coldplay",
      "album": "X&Y",
      "duration": "4:55",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e5/42/e3/e542e340-a45c-695e-e0b8-6155e222ebc0/mzaf_14955746616030397665.plus.aac.p.m4a"
    },
    {
      "id": "8",
      "title": "Traitor",
      "artist": "Olivia Rodrigo",
      "album": "SOUR",
      "duration": "3:49",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4f/ae/6c/4fae6c93-6bb3-d320-00bf-f32310705b3f/mzaf_16796881619991035581.plus.aac.p.m4a"
    },
    {
      "id": "9",
      "title": "Skinny Love",
      "artist": "Bon Iver",
      "album": "For Emma, Forever Ago",
      "duration": "3:58",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d2/2f/a4/d22fa4db-97d9-4d99-7272-5ae5ed58de21/mzaf_2631945908793863176.plus.aac.p.m4a"
    },
    {
      "id": "10",
      "title": "Yesterday",
      "artist": "The Beatles",
      "album": "Help!",
      "duration": "2:03",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d1/69/2d/d1692d74-fe32-c676-7a1d-00deacae1644/mzaf_11316115358642175957.plus.aac.p.m4a"
    }
  ],
  "chill": [
    {
      "id": "11",
      "title": "Sunset Lover",
      "artist": "Petit Biscuit",
      "album": "Presence",
      "duration": "3:57",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6e/7f/e8/6e7fe823-dc62-3c03-5b18-358ba31f7d2e/mzaf_7798102817870742981.plus.aac.p.m4a"
    },
    {
      "id": "12",
      "title": "Location",
      "artist": "Khalid",
      "album": "American Teen",
      "duration": "3:39",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8e/f8/66/8ef866e9-5d33-1f6d-3ce6-7d7f8a060c41/mzaf_4830540290440739615.plus.aac.p.m4a"
    },
    {
      "id": "13",
      "title": "Weightless",
      "artist": "Marconi Union",
      "album": "Weightless",
      "duration": "8:00",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/95/84/05/95840512-b41d-68e4-e7ff-c8987c9bcceb/mzaf_8934420937865408216.plus.aac.p.m4a"
    },
    {
      "id": "14",
      "title": "Self Control",
      "artist": "Frank Ocean",
      "album": "Blonde",
      "duration": "4:09",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ba/cc/4d/bacc4dda-b762-0c0a-5ef0-6c2fad1bdb5c/mzaf_8909701195572310967.plus.aac.p.m4a"
    },
    {
      "id": "15",
      "title": "Midnight City",
      "artist": "M83",
      "album": "Hurry Up, We're Dreaming",
      "duration": "4:03",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/71/5c/80/715c80fc-ebe4-e713-487c-5bdefee6c6f3/mzaf_3698387428135478316.plus.aac.p.m4a"
    }
  ],
  "energetic": [
    {
      "id": "16",
      "title": "Titanium",
      "artist": "David Guetta ft. Sia",
      "album": "Nothing but the Beat",
      "duration": "4:05",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/45/dd/8f/45dd8ffc-0164-1f70-c53d-bf91a1d80b1a/mzaf_3092057092144618662.plus.aac.p.m4a"
    },
    {
      "id": "17",
      "title": "Stronger",
      "artist": "Kanye West",
      "album": "Graduation",
      "duration": "5:11",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/96/f2/25/96f225f2-cd07-3639-4133-0910aa9725c0/mzaf_13857358519708863745.plus.aac.p.m4a"
    },
    {
      "id": "18",
      "title": "POWER",
      "artist": "Kanye West",
      "album": "My Beautiful Dark Twisted Fantasy",
      "duration": "4:52",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/75/a0/6b/75a06b55-7898-7f38-3af5-47575303edcf/mzaf_9134049976334830572.plus.aac.p.m4a"
    },
    {
      "id": "19",
      "title": "Levels",
      "artist": "Avicii",
      "album": "Levels",
      "duration": "3:19",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/dc/bd/66dcbd68-b557-bdfd-f2c2-a05491758783/mzaf_13654489760720011690.plus.aac.p.m4a"
    },
    {
      "id": "20",
      "title": "Thunderstruck",
      "artist": "AC/DC",
      "album": "The Razors Edge",
      "duration": "4:52",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a0/fb/99/a0fb995a-6e93-c67b-846b-8c81a54748c9/mzaf_2311271038340188410.plus.aac.p.m4a"
    }
  ],
  "focused": [
    {
      "id": "21",
      "title": "Deep Focus",
      "artist": "Lofi Girl",
      "album": "Lofi Study",
      "duration": "2:45",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/42/93/c5/4293c513-8b50-53e3-1efe-98cba1b0457f/mzaf_16592245855337920494.plus.aac.p.m4a"
    },
    {
      "id": "22",
      "title": "Starstuff",
      "artist": "Stellar Drone",
      "album": "Echoes",
      "duration": "5:34",
      "audioUrl": ""
    },
    {
      "id": "23",
      "title": "Clair de Lune",
      "artist": "Claude Debussy",
      "album": "Suite bergamasque",
      "duration": "5:00",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c3/68/35/c36835b6-9cb3-a20a-088b-6c7d39e39636/mzaf_484141242926915999.plus.aac.p.m4a"
    },
    {
      "id": "24",
      "title": "Day One",
      "artist": "Hans Zimmer",
      "album": "Interstellar",
      "duration": "3:19",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/89/72/8c/89728cf9-877a-9346-e023-765850d14b33/mzaf_8645337984161402509.plus.aac.p.m4a"
    },
    {
      "id": "25",
      "title": "Avril 14th",
      "artist": "Aphex Twin",
      "album": "Drukqs",
      "duration": "2:05",
      "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6e/50/4b/6e504bc0-4e43-377f-9f0d-2a34e8e1bf4f/mzaf_15350470435678028714.plus.aac.p.m4a"
    }
  ]
};
