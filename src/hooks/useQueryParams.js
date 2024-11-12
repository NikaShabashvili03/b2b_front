import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

function useQueryParams() {
  const query = useQuery();
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useState({
    subcategory: query.get('subcategory'),
    page: query.get('page')
  });

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (queryParams.subcategory) searchParams.set('subcategory', queryParams.subcategory);
    if (queryParams.page) searchParams.set('page', queryParams.page);

    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [queryParams, navigate]);

  const updateQueryParams = (newParams) => {
    setQueryParams((prev) => ({ ...prev, ...newParams }));
  };

  return [queryParams, updateQueryParams];
}

export default useQueryParams;
