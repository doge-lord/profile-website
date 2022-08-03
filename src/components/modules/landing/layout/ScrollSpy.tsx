import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
  useMemo,
  Dispatch,
  useCallback,
} from "react";

enum ActionType {
  SET_ACTIVE_ROUTE = "SET_ACTIVE_ROUTE",
  SET_SECTION_ELEMENT = "SET_SECTION_ELEMENT",
}

type State = {
  activeRoute: string;
  sectionElements: Record<string, HTMLElement>;
};

type Action =
  | { type: ActionType.SET_ACTIVE_ROUTE; activeRoute: string }
  | { type: ActionType.SET_SECTION_ELEMENT; key: string; element: HTMLElement };

const DEFAULT_STATE: State = {
  activeRoute: "",
  sectionElements: {},
};

function reducer(state = DEFAULT_STATE, action: Action) {
  if (action.type === ActionType.SET_ACTIVE_ROUTE) {
    return { ...state, activeRoute: action.activeRoute };
  } else if (action.type === ActionType.SET_SECTION_ELEMENT) {
    return {
      ...state,
      sectionElements: {
        ...state.sectionElements,
        [action.key]: action.element,
      },
    };
  }

  return state;
}

const ScrollSpyContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: DEFAULT_STATE,
  dispatch: () => {},
});

const ScrollSpy: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ScrollSpyContext.Provider value={value}>
      {children}
    </ScrollSpyContext.Provider>
  );
};

function useScrollSpy() {
  const context = useContext(ScrollSpyContext);

  if (context === undefined) {
    throw new Error("useScrollSpy must be used within a ScrollSpy");
  }

  const { state, dispatch } = context;

  const setActiveRoute = useCallback(
    (route: string) => {
      dispatch({ type: ActionType.SET_ACTIVE_ROUTE, activeRoute: route });
      window.history.replaceState({}, "", route);
    },
    [dispatch]
  );

  const registerSection = useCallback(
    (route: string, element: HTMLElement) => {
      dispatch({ type: ActionType.SET_SECTION_ELEMENT, key: route, element });
    },
    [dispatch]
  );

  const scrollTo = useCallback(
    (
      route: string,
      options: { update?: boolean; behavior?: "auto" | "smooth" } = {}
    ) => {
      const element = state.sectionElements[route];
      const { update = false, behavior = "auto" } = options;

      if (element) {
        element.scrollIntoView({ behavior });
      }
      if (update) {
        setActiveRoute(route);
      }
    },
    [state.sectionElements, setActiveRoute]
  );

  return {
    activeRoute: state.activeRoute,
    setActiveRoute,
    registerSection,
    scrollTo,
  };
}

export { ScrollSpy, useScrollSpy };
