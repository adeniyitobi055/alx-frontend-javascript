import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
g const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then(([userResult, photoResult]) => {
      const user = userResult.status === 'fulfilled' ? userResult.value : null;
      const photoError = photoResult.status === 'rejected' ? photoResult.reason : null;

      return [{ user, photoError }];
    });
}
