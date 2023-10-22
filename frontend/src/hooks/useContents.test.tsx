import { renderHook } from '@testing-library/react';
import useContents from "./useContents"; 


jest.mock("../api/FetchData", () => ({
  getContent: jest.fn(() => Promise.resolve([  {
    "id": "951a4781-92fb-48da-907c-c320f9886879",
    "name": "Chapter 1",
    "level": 1,
    "parent_id": "",
    "content": "Chapter 1"
  },
  {
    "id": "94013e28-d506-4ee3-825f-53ddfb3712a4",
    "name": "Chapter 1.1",
    "level": 2,
    "parent_id": "951a4781-92fb-48da-907c-c320f9886879",
    "content": "Chapter 1.1"
  },
  {
    "id": "2fd2ffdd-268e-421b-8d3f-faafaff6bb89",
    "name": "Chapter 1.2",
    "level": 2,
    "parent_id": "951a4781-92fb-48da-907c-c320f9886879",
    "content": "Chapter 1.2"
  },
  {
    "id": "644bb86c-1041-4e6d-83b3-d28bce75674d",
    "name": "Chapter 1.3",
    "level": 2,
    "parent_id": "951a4781-92fb-48da-907c-c320f9886879",
    "content": "Chapter 1.3"
  }])), 
}));

describe("useContents custom hook", () => {
  it("should fetch content data and provide results", async () => {
    const { result,  } = renderHook(() => useContents());

    

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.error.message).toBe("");
    expect(result.current.results).toEqual([]);

  
  });

  it("should handle fetch errors", async () => {
    const errorMessage = "Fetch error message";
    jest.spyOn(console, "error").mockImplementation(() => {}); 
    jest.mock("../api/FetchData", () => ({
      getContent: jest.fn(() => Promise.reject(new Error(errorMessage))),
    }));

    const { result } = renderHook(() => useContents());

    

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
    expect(result.current.error.message).toBe(errorMessage);
    expect(result.current.results).toEqual([]);
  });
});
