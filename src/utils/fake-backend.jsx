export const configureFakeBackend = () => {
    const users = [{ id: 1, username: "test", password: "test" }];
    let realFetch = window.fetch;
    window.fetch = (url, opts) => {

        const isLoggedIn = opts.headers['Authorization'] === 'Bearer fake-jwt-token';

        return new Promise((resolve, reject) => {

        // wrap in timeout to simulate server api call
            setTimeout(() => {
                // private helper functions 
                const ok = (body) => {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                const unauthorised = () => {
                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
                }

                const error = (message) => {
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
                // authenticate - public
                if (url.endsWith("/users/authenticate") && opts.method === "POST") {
                    const params = JSON.parse(opts.body);
                    const user = users.find(ele => ele.username === params.username && ele.password === params.password);
                    if (!user) return error("User or password is incorrect");
                    return ok ({
                        id: user.id,
                        username: user.username,
                        password: user.password,
                        token: "fake-jwt-token"
                    });
                }

                // get users - secure 
                if (url.endsWith("/users") && opts.method === "GET") {
                    if (!isLoggedIn) return unauthorised();
                    return ok(users);
                }

                // pass through any requests not handle above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
};