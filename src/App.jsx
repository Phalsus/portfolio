import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { appRoutes } from "./Routes/route";

export default function App() {
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Suspense>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                exact
                path={route.path}
                element={
                  <route.component />
                }
              />
            ))}
          </Routes>
        </Suspense>
      </CSSTransition>
    </SwitchTransition>
  );
}
