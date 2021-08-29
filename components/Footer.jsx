import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-80">
        <h5 className="font-bold">ABOUT</h5>
        <p> How Airbnb works </p>
        <p> Newsroom </p>
        <p> Investors</p>
        <p> Airbnb Plus</p>
        <p> Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-80">
        <h5 className="font-bold">COMMUNITY</h5>
        <p> Accessibility </p>
        <p> This is not a real site </p>
        <p> Its a pretty cool cone</p>
        <p> Referrals accepted</p>
        <p> Elishas community</p>
      </div>

      <div className="space-y-4 text-xs text-gray-80">
        <h5 className="font-bold">HOST</h5>
        <p> Elisha Day </p>
        <p> Presents </p>
        <p> A site amde with Next.js and Tailwind CSS</p>
        <p> One of many sites</p>
        <p> Open source on github</p>
      </div>
      <div className="space-y-4 text-xs text-gray-80">
        <h5 className="font-bold">SUPPORT</h5>
        <p> Help Center </p>
        <p> Trust and Safety </p>
        <p> SafeGaming</p>
        <p> Easter Eggs</p>
        <p> For The Win</p>
      </div>
    </div>
  );
}
