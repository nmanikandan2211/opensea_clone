import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "mfpgwy3g",
  dataset: "production",
  apiVersion: "2021-03-25",
  token: "skrqqtKsWz5WivdYxDAILK4YIRN7qK7ThjVpdj2DaqYIQNCwnzWd7CN3VA6eaKNSrtgBGsEzLZhqkCrNplESDjspTyP5pWAmLamAv2Ta7wiCxx2TxoU9NNmNTFVgA29EsvdTP0anvwBC9GSe07XvZvTHNDbTDUbLJz4EjiyQ1VuZCEPGuLxJ",
  useCdn: false,
});
