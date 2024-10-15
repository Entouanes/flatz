# Ceci fonctionne:

angles = {"BD": 0.5}  # dict
counts = {"BD": 10}  # dict
initials = [0.1, 0.2, 0.3]  # list


def get_plv_surr(a, c):
    return a + c


def fun_a():
    plv_recalculated_list = []
    a = angles["BD"]
    c = counts["BD"]

    for initial in initials:

        plv_true = get_plv_surr(a, c)
        plv_recalculated_list.append(plv_true)

    print(plv_recalculated_list)


# Ceci ne fonctionne pas:


def fun_b():
    plv_recalculated_list = []
    for initial in initials:
        a = angles["BD"]
        c = counts["BD"]

        plv_true = get_plv_surr(a, c)
        plv_recalculated_list.append(plv_true)

    print(plv_recalculated_list)


fun_b()
