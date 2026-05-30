# My Wedding Invitation Website

## A Multi-Language Wedding Website tempalte

[Live Demo](https://emanuelekarolina.vercel.app/)

---

## Technologies Used

- Next.js
- Tailwind CSS
- Framer Motion
- EmailJS
- Spotify

---

## Description

I created this website for my wedding, but it can be used as a template for anyone (see [LICENSE](./LICENSE.md)). This multilingual wedding website (currently supporting English, Italian, and Polish) includes several features such as RSVP functionality, a password-protected registry section for bank details, a music suggestion feature integrated with Spotify, and an admin panel to manage your guest list and more.

### Features

This multilingual wedding website template is designed for an elegant and modern user experience, covering all essential aspects of a wedding event. Below are some of the key features:

- **Welcome Section**: full-screen hero section featuring the couple's photos, names, and a countdown to the wedding day.

  ![Welcome Section](./public/screenshots/welcome.png)

- **Save the Date**: A dedicated section to highlight the wedding date, presented in a simple yet elegant design.

  ![Save The Date Section](./public/screenshots/savethedate.png)

- **Wedding Timeline**: A modern timeline feature that outlines the wedding day schedule in a clear and visually appealing way.

  ![Wedding Timeline Section](./public/screenshots/timeline.png)

- **Details Section**: Provides important information about accommodation, transportation, and other wedding logistics.

  ![Details Section Section](./public/screenshots/details.png)

- **RSVP Section**: Allows guests to search for their names on the guest list and confirm their attendance. The system is smartly designed to handle guest relationships, enabling joint RSVPs for couples or families, and sends notifications via email once an RSVP is submitted.

  ![RSVP Section](./public/screenshots/rsvp.png)

- **Gift Registry**: A clean and straightforward section for sharing gift registry information.

  ![Gift Registry Section](./public/screenshots/registry.png)

- **Music Suggestion Section**: Guests can search for songs, preview them, and add their choices directly to a Spotify playlist for the wedding. Integrated with Spotify for seamless playlist management.

  ![Music Suggestion Section](./public/screenshots/spotify.png)

- **Admin Panel**: Accessible via Google authentication, the admin panel allows for easy management of the guest list and gift registry bank details. Admins can view, edit, and delete guests or relationships and sort and search through the guest list.

  ![Admin Panel](./public/screenshots/admin.png)

- **Gallery with Parallax Effect**: A visually engaging photo gallery with a smooth parallax effect.

  ![Gallery with Parallax Effect](./public/screenshots/animation.png)

- **Multilingual Support**: The website automatically detects and displays the appropriate language (if supported) based on the user's browser settings. Currently, it supports English, Italian, and Polish, with the ability to easily add or remove languages.

  ![Multilingual Support](./public/screenshots/multilingual.png)

- **Password-Protected Bank Details**: For those wishing to send gifts via bank transfer, the website offers a secure, password-protected section for sharing bank details like IBAN.

  ![Password-Input](./public/screenshots/password.png)
  ![Password-Protected Bank Details](./public/screenshots/bank.png)

- The website is fully responsive.

---

## Installation and Usage

### Prerequisites

- Node.js (v16+)
- Spotify Account
- Spotify Playlist
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Emanuele-Sgroi/My-Wedding-Invitation-Website.git

   ```

   ```bash
   cd My-Wedding-Invitation-Website

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. **Set Up Spotify API:**

   - Create a Spotify developer account and set up a new app to get your **Client ID** and **Client Secret**.
   - In yuor normal Spotify account, create a Spotify playlist where song suggestions will be added.

4**Environment Variables:**

   Create a `.env.local` file in the root directory and add your environment variables:

```bash
# Email js
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_public_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_public_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_emailjs_public_key
# Spotify
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_PLAYLIST_ID=your_spotify_playlist_id
SPOTIFY_REDIRECT_URI=e.g. http://localhost:3000/api/auth/callback
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
# Other
NEXT_PUBLIC_ADMIN_ACCESS_PASSWORD=e.g. AdminPassword123
NEXT_PUBLIC_ALLOWED_ADMIN_EMAIL=example@youradminemail.com
```

4.  **Run the Application:**
    To start the development server:

```bash
 npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website locally.

---

---

### License

This project is licensed under a [Custom License](LICENSE.md). Please read the license to understand how to use this template properly.

---

### Contribution

Contributions are welcome! If you'd like to improve the project, feel free to submit a pull request. Any contributions made will be under the same custom license, and contributors will receive appropriate credit.

---

**HAPPY CODING** 🚀🚀🚀
