import React from 'react';

export function WaitlistConfirmation({ name }: { name?: string }) {
  return (
    <div>
      <div>
        <h1>Thank You for Joining the Waitlist!</h1>
      </div>

      <div>
        <p>Hello {name || 'there'},</p>
        <p>
          Thank you for signing up for our waitlist! We&apos;re thrilled to have
          you on board.
        </p>
        <p>
          We&apos;ll be in touch once the beta version of our product is ready.
          You won&apos;t receive any other emails or spam in the meantime—just a
          direct notification when the product is available for you to access!
        </p>
        <p>
          We appreciate your patience and can&apos;t wait to bring you something
          amazing.
        </p>
      </div>

      <div>
        <p>
          If you have any questions, feel free to reach out to us at{' '}
          <a href='mailto:rajat.abcx@gmail.com'>rajat.abcx@gmail.com</a>, or
          reply to this email.
        </p>
        <p>
          You&apos;re receiving this email because you signed up for the
          waitlist. We respect your privacy, and we won&apos;t send any unwanted
          emails.
        </p>
      </div>
    </div>
  );
}
