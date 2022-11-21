import { Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "./Components/LoadingScreen";
import { AuthGuard, GuestGuard } from "./Guards";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Admin from "./Components/layouts/Admin";
import Auth from "./Components/layouts/Auth";

export const renderRoutes: any = (routes: any = []) => {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          {routes.map((route: any, i) => {
            const Guard: any = route.guard || Fragment;
            const Component: any = route.component;
            const Layout: any = route.layout || Fragment;

            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => {
                  return (
                    <Guard>
                      <Layout>
                        {route.routes ? (
                          renderRoutes(route.routes)
                        ) : (
                          <Component {...props} />
                        )}
                      </Layout>
                    </Guard>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Suspense>
    </>
  );
};

export const routes = [
  {
    exact: true,
    path: "/login",
    // layout: Auth,
    component: lazy(() => import("./Components/views/auth/Login")),
  },
  {
    exact: true,
    path: "/",
    layout: Admin,
    component: lazy(
      () =>
        import("./Components/views/Dashboard/AdminDashboard/AdminDashboard")
    ),
  },
  {
    exact: true,
    path: "/staffonboarding",
    component: lazy(
      () => import("./Components/views/Onboarding/Staff_onboarding")
    ),
    guard: AuthGuard,
  },
  {
    path: "/admin",
    layout: Admin,
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        path: "/admin/dashboard",
        component: lazy(
          () =>
            import("./Components/views/Dashboard/AdminDashboard/AdminDashboard")
        ),
      },
    ],
  },
];

//             <Route component={Signup} path="/signup" />
//             <Route component={StaffOnboarding} path="/staffonboarding" />
//             <Route component={StaffOnboarding2} path="/staffonboarding2" />
//             <Route component={StaffOnboarding3} path="/staffonboarding3" />
//             <Route component={StaffOnboarding_Preview} path="/staffonboarding_preview" />
//             <Route component={AdminDashboard} path="/admin/dashboard" />
//             <Route component={AdminStaffs} path={"/dashboard/staff"} exact={true}/>
//             <Route component={Staffs_Details} path={"/dashboard/staff/:staff_id"} exact={true}/>
