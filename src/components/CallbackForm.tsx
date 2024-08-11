import React from 'react';

const CallbackForm: React.FC = () => (
    <section>
        <h2>Request a Callback</h2>
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Submit</button>
        </form>
    </section>
);

export default CallbackForm;
