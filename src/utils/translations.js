/**
 * @file translation.js
 * @description Contains translations for the website in English, Italian, and Polish, covering various sections such as navbar, RSVP, registry, and more.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

const translations = {
  // NORWEGIAN <---------------------------------------------------------------------------------------
  no: {
    couple: {
      her: "Nasim",
      him: "Mads",
      footer_her: "Nasim",
      footer_him: "Mads",
    },
    navbar: {
      welcome: "Velkommen",
      save_the_date: "Hald av datoen",
      schedule: "Tidslinje",
      info: "Detaljar",
      rsvp: "Svar",
      registry: "Gåver?",
      music: "Musikk",
    },
    welcome_section: {
      small_text: "Vi giftar oss",
      days: "Dager",
      day: "Dag",
      hours: "Timar",
      hour: "Time",
      minutes: "Minutt",
      minute: "Minutt",
      seconds: "Sekund",
      second: "sekund",
    },
    saveTheDate_section: {
      title: "",
      title_cursive: "Bli med på å feire oss",
      date: "8. mai 2027",
      place: "i Oslo",
      place_ceremony: "Seremonien, med dei næraste, er i Klimahuset i Botanisk hage.",
      place_party: "Festen er i Grefsen og Disen velhus.",
      story_1: "Vi møttest",
      story_2: "Vi forlova oss",
      story_3_future: "Vi giftar oss",
      story_3_past: "Vi gifta oss",
    },
    schedule_section: {
      title: {
        main: "",
        sub: "Tidslinje",
      },
      description:
        "Fleire tider og meir detaljar kjem etter som dei blir klare.",
      day_0: {
        title: "Fredag 7.mai",
        events: {
          dinner: {
            time: "18.00",
            title: "Uformell middag"
          }
        }
      },
      day_1: {
        title: "Laurdag 8.mai",
        events: {
          ceremony: {
            time: "15:00",
            title: "Seremonien startar",
          },
          arrival: {
            time: "17:00",
            title: "Velkommen"
          },
          dinner: {
            time: "18.00",
            title: "Middag",
          },
          party: {
            time: "Etter middag",
            title: "Fest"
          },
          photo: {
            time: "8:00 - 11:00 PM",
            title: "Photo Booth",
          },
          pig: {
            time: "12:00 AM",
            title: "Special Dish",
          },
          cake_cutting: {
            time: "22:30 PM",
            title: "Cake Cutting",
          },
          wrapup: {
            time: "Seint",
            title: "Vi rundar av ein gong utpå natta",
          }
        },
      },
      day_2: {
        title: "Day 2",
        events: {
          after: {
            time: "3:00 PM",
            title: "After Party Starts",
          },
          vespa: {
            time: "3:00 - 8:00 PM",
            title: "Vespa Bar",
          },
          party_continues: {
            time: "All Day",
            title: "Eat, Drink, Dance, Repeat!",
          },
          end: {
            time: "9:00 PM",
            title: "The End",
          },
        },
      },
    },
    info_section: {
      title: {
        main: "",
        sub: "Detaljane",
      },
      details: {
        when_where: "Kor og når?",
        dates: [
          {
            bold: true,
            text: "Når: ",
          },
          "Laurdag 8. mai 2027",
        ],
        location: [
          {
            bold: true,
            text: "Kor: ",
          },
          'Lokalet Grefsen og Disen velhus, også kjent som "Svetter\'n", Kjelsåsveien 18, 0488 Oslo.',
        ],
        button_loc: "Sjå lokalet",
        food: [
          {
            bold: true,
            text: "Mat: ",
          },
          'Vi står sjølvsagt for mat og drikke.'
        ],
      },
      accommodations: {
        title: "Overnatting",
        description_1: [
          "For dokker som kjem tilreisande, tilrår vi å bu på ",
          {
            bold: true,
            text: "Thon Hotell Linne",
          },
            "."
        ],
        description_2: [
            "Vi har ein avtale med dei om billige både enkelt- og dobbeltrom, til henhaldsvis 1195 og 1395 kr per natt."
        ],
        description_3: [
            "Dokker må booke per epost. Snakk med oss, så får dokker kode og epostadresse."
        ],
        breakfast: [
          { bold: true, text: "Breakfast" },
          " is included with your stay and will be served from ",
          { bold: true, text: "9 AM to 12 PM" },
          " each morning.",
        ],
        checkout: [
          { bold: true, text: "Hotel/Apartment Checkout:" },
          " The checkout is on Monday at 11:00 AM, please have your breakfast before then.",
        ],
      },
      contact: {
        title: "Kontakt oss",
        // Email added on the front end
        // numbers added on the front end
      },
      toastmaster: {
        title: "Toastmaster",
        description_1: [
            "Ønskjer du å seie noko i bryllaupet? ",
          {
            bold: true,
            text: "Avtal det direkte med toastmaster.",
          },
        ],
        about: [
            "Toastmaster er vår gode venninne ",
          {
            bold: true,
            text: "Pernille Bonnevie Hansen"
          },
            "."
        ],
        phone: [
            "Kontakt ho på ",
          {
            bold: true,
            text: "99774337",
          },
            "."
          ],
      }
    },
    rsvp_section: {
      top_title: "",
      title: { main: "", sub: "Stadfest at du kjem" },
      description_1: [
        { bold: true, text: "Svar gjerne så fort du kan, og seinast 1. oktober." },
        "",
      ],
      description_2:
        "Vi ber om at kvar enkelt som kjem fyllar ut skjemaet. Det gjer planlegginga enklare for oss, og gir oss lågare skuldre.",
      description_3:
        "Vi sender personleg invitasjon til dei vi vil invitere. Så om du har komme over denne sida på anna vis, men ikkje fått invitasjon frå oss, får vi heller ta det igjen ein annan gong.",
      description_4:
        "Feiringa vår er barnefri, men vi håper vi er tidlig nok ute til at dere som trenger det får skaffet barnevakt.",
      description_5:
        "",
    },
    registry_section: {
      title: { main: "", sub: "Gåver" },
      description_1:
        "Det vi ønskjer oss mest er at du blir med og feirar oss.",
      description_2:
        "Vi har alt vi treng, men vi liker jo å reise, så eit bidrag til reisekontoen vil vi sette pris på.",
      description_3:
        "",
    },
    music_section: {
      title: { main: "OUR", sub: "Playlist" },
      description:
        "Add your favorite party songs to our playlist and help us shape the perfect soundtrack for our wedding! ",
      placeholder: "Enter the song name",
      small_note:
        "* Some songs can't be played here, but you can still add them to the playlist.",
      toast_success: {
        title: "Song added to the playlist",
        description: "Would you like to add another song?",
      },
      toast_error: {
        title: "Unable to add the song",
        description:
          "We're sorry, but something went wrong on our end. Please try again later.",
      },
    },
    footer: {
      text_1: "Bryllaupsside av og for ",
      text_2: "",
      text_3: "Designmal av",
    },
    not_found: {
      message: "The page you are looking for does not exist.",
      button: "Go Back",
    },
  },
};

export default translations;
