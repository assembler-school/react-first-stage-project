import { authenticationService } from "../services";

export const authHeader = () => {
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}`}
    } else {
        return {};
    }
};