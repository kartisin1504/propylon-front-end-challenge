interface Content {
  id: string;
  name: string;
  level: number;
  parent_id: string;
  content: string;
}
export const getContent = async (): Promise<Content[]> => {
  //const baseUrl =process.env.REACT_APP_BASE_URL
  const response = await fetch('http://localhost:3004/data');

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }

  const data = await response.json();
  return data.content.document;
};
