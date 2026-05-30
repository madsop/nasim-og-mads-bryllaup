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
      button: "Hald av datoen",
    },
    saveTheDate_section: {
      title: "HALD",
      title_cursive: "av datoen",
      date: "8. mai 2027",
      place: "i Oslo",
      place_ceremony: "Seremonien er i Klimahuset i Botanisk hage",
      place_party: "Festen er i Grefsen og Disen velhus",
      story_1: "Vi møttest",
      story_2: "Vi forlova oss",
      story_3_future: "Vi giftar oss",
      story_3_past: "Vi gifta oss",
    },
    schedule_section: {
      title: {
        main: "Tidslinje",
        sub: "",
      },
      description:
        "Fleire tider og meir detaljar kjem etter som dei blir klare.",
      day_1: {
        title: "Laurdag 8. mai",
        events: {
          ceremony: {
            time: "15:00",
            title: "Seremonien startar",
          },
          dinner: {
            time: "6:00 PM",
            title: "Dinner Served",
          },
          dance: {
            time: "6:00 PM",
            title: "First Dance",
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
          games: {
            time: "12:30 AM",
            title: "Party Games",
          },
          party: {
            time: "All Night",
            title: "Eat, Drink, Dance, Repeat!",
          },
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
      },
      accommodations: {
        title: "Overnatting",
        description_1: [
          "For dokker som kjem tilreisande, jobbar vi med å få på plass ein avtale med hotell.",
          {
            bold: true,
            text: "Friday 25th of July, Saturday 26th of July, and Sunday 27th of July.",
          },
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
            text: "Avtal det direkte med toastmaster",
          },
        ],
        about: [
            "Meir info om toastmaster kjem her når det er klart",
        ],
      }
    },
    rsvp_section: {
      top_title: "Svar",
      title: { main: "Stadfest at", sub: "du kjem" },
      description_1: [
        { bold: true, text: "Svar gjerne så fort du kan, og seinast 1. november" },
        " Fyll ut skjemaet.",
      ],
      description_2:
        "Vi ber om at kvar enkelt som kjem fyllar ut skjemaet. Det gjer planlegginga enklare for oss, og gir oss lågare skuldre.",
      label: "Search your name in the guests list",
      placeholder: "Search for your name",
      no_found: "No guests found with this name",
      multiple_guests_1: {
        hi: "Hi ",
        you: " You, ",
        and: " and ",
        are_invited:
          ", are warmly invited to join us on our special day. Celebrating with all of you will make it unforgettable!",
      },
      multiple_guests_2:
        "Select who is attending the wedding. We hope all of you can make it.",
      single_guest_1: {
        hi: "Hi ",
        are_invited:
          " you are warmly invited to join us on our special day. Celebrating with you will make it unforgettable!",
      },
      single_guest_2: "Are you attending the wedding?",
      answers: { yes: "Yes", no: "No", unknown: "Don't know yet" },
      note_placeholder: "Would you like to leave a note?",
      rsvp_success: {
        thanks: "Thank you!",
        submitted: " Your RSVP has been submitted.",
        change_by: [
          "Remember that you can change the attendance any time before the ",
          { bold: true, text: "26th of May 2025" },
          ".",
        ],
      },
      error_enter_name: "Please enter your answer before submitting",
      error_submitting: "Error submitting RSVP. Please try again.",
      button: {
        submit: "Send RSVP",
        loading: "Loading...",
      },
    },
    registry_section: {
      title: { main: "Gåver", sub: "_" },
      description_1:
        "Your presence at our wedding is truly the greatest gift we could ask for!",
      description_2:
        "However, if you wish to honor us with a gift, we would greatly appreciate a monetary contribution to help us build our future together.",
      description_3:
        "In lieu of flowers, alcohol, and other physical gifts, we would be delighted to receive scratch cards or lottery tickets as a fun and exciting way to celebrate our new beginning.",
      description_4: "",
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
      text_1: "Website created with ",
      text_2: "by ",
      text_3: "Designmal av",
    },
    not_found: {
      message: "The page you are looking for does not exist.",
      button: "Go Back",
    },
  },
};

export default translations;
